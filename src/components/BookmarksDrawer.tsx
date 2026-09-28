/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NewsArticle } from '../types/news';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Bookmark,
  Trash2,
  Download,
  BookOpen,
  Clock,
  ArrowRight,
  WifiOff
} from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedArticles: NewsArticle[];
  onSelectArticle: (article: NewsArticle) => void;
  onRemoveBookmark: (id: string) => void;
  onExport: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onExport
}) => {
  const { t, l } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div
        className="absolute inset-0 bg-stone-950/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside aria-label="Bookmarks drawer" className="w-screen max-w-md bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-sky-600 dark:text-sky-400 fill-sky-600/20" />
              <div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 font-serif">
                  {t('navBookmarks')}
                </h3>
                <p className="text-xs text-stone-500 font-mono">
                  共 {bookmarkedArticles.length} 篇專案保存 · 支援離線快取
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {bookmarkedArticles.length > 0 && (
                <button
                  onClick={onExport}
                  className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  title={t('exportBookmarks')}
                >
                  <Download className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                title={t('close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {bookmarkedArticles.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400 space-y-3">
                <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <p className="text-xs max-w-xs leading-relaxed">
                  {t('noBookmarks')}
                </p>
              </div>
            ) : (
              bookmarkedArticles.map(article => (
                <div
                  key={article.id}
                  className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700 transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 pb-1">
                      <span className="text-sky-700 dark:text-sky-400 font-semibold">{l(article.kicker)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTimeMinutes} 分鐘</span>
                      </span>
                    </div>

                    <h4
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif line-clamp-2 cursor-pointer group-hover:text-sky-600 transition-colors"
                    >
                      {l(article.title)}
                    </h4>

                    <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mt-1">
                      {l(article.summary)}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-200/60 dark:border-stone-800 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{t('offlineAvailable')}</span>
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onRemoveBookmark(article.id)}
                        className="p-1 rounded text-stone-400 hover:text-rose-600 transition-colors"
                        title="移除收藏"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          onSelectArticle(article);
                          onClose();
                        }}
                        className="px-2 py-1 rounded bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-[11px] font-medium flex items-center gap-1"
                      >
                        <span>閱讀</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          {bookmarkedArticles.length > 0 && (
            <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-xs text-stone-500 font-mono text-center">
              所有收藏文章已保存在本機快取，可離線查閱
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
