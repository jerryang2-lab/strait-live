/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { NewsArticle } from '../types/news';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cslo_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const toggleBookmark = useCallback((articleId: string, article?: NewsArticle) => {
    setBookmarks((prev) => {
      let updated: string[];
      if (prev.includes(articleId)) {
        updated = prev.filter(id => id !== articleId);
      } else {
        updated = [articleId, ...prev];
        // Also cache article details locally for offline access
        if (article) {
          try {
            localStorage.setItem(`cslo_cached_article_${articleId}`, JSON.stringify(article));
          } catch (e) {
            console.warn('Failed to cache article offline', e);
          }
        }
      }
      localStorage.setItem('cslo_bookmarks', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const isBookmarked = useCallback((articleId: string) => {
    return bookmarks.includes(articleId);
  }, [bookmarks]);

  const getCachedArticle = useCallback((articleId: string): NewsArticle | null => {
    try {
      const data = localStorage.getItem(`cslo_cached_article_${articleId}`);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }, []);

  const exportBookmarks = useCallback((articles: NewsArticle[]) => {
    const bookmarkedArticles = articles.filter(a => bookmarks.includes(a.id));
    const content = bookmarkedArticles.map((a, i) => {
      return `${i + 1}. [${a.kicker['zh-TW']}] ${a.title['zh-TW']}\n來源：${a.source}\n摘要：${a.summary['zh-TW']}\n網址：${window.location.origin}/#${a.id}\n\n`;
    }).join('\n');

    const blob = new Blob([
      `兩岸民生智庫觀測站 — 個人離線閱讀清單\n匯出時間：${new Date().toLocaleString()}\n版權所有 © 2026 兩岸民生智庫觀測站\n\n-------------------------\n\n${content}`
    ], { type: 'text/plain;charset=utf-8' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `兩岸民生智庫_收藏閱讀清單_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [bookmarks]);

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    getCachedArticle,
    exportBookmarks,
    isOnline
  };
}
