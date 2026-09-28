/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { MorningBriefBanner } from './components/MorningBriefBanner';
import { NewsFeed } from './components/NewsFeed';
import { ArticleModal } from './components/ArticleModal';
import { QuantitativeHub } from './components/QuantitativeHub';
import { AudioReaderBar } from './components/AudioReaderBar';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { CopyrightNoticeModal } from './components/CopyrightNoticeModal';
import { SecurityShield } from './components/SecurityShield';
import { Footer } from './components/Footer';
import { initialNewsArticles, defaultMorningBrief } from './data/authoritativeData';
import { NewsArticle, DailyMorningBrief } from './types/news';
import { useSpeechReader } from './hooks/useSpeechReader';
import { useBookmarks } from './hooks/useBookmarks';
import { Newspaper, BarChart3, RefreshCw } from 'lucide-react';

function AppContent() {
  const { language, t, l } = useLanguage();
  const [articles, setArticles] = useState<NewsArticle[]>(initialNewsArticles);
  const [morningBrief, setMorningBrief] = useState<DailyMorningBrief>(defaultMorningBrief);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isCopyrightOpen, setIsCopyrightOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'feed' | 'charts'>('feed');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Bookmarks & Offline Cache
  const { bookmarks, toggleBookmark, isBookmarked, exportBookmarks, isOnline } = useBookmarks();

  // Web Speech Synthesis Reader
  const speechReader = useSpeechReader(language);

  // Handle playing article speech
  const handleStartAudio = (article: NewsArticle) => {
    const title = l(article.title);
    const paragraphs = article.content[language] || article.content['zh-TW'] || [];
    speechReader.playArticle(article.id, title, paragraphs);
  };

  // Handle refreshing daily data
  const handleRefreshData = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/news/refresh', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        if (data.articles) setArticles(data.articles);
        if (data.morningBrief) setMorningBrief(data.morningBrief);
      }
    } catch {
      // If offline, simulate refresh with local time update
      setMorningBrief(prev => ({
        ...prev,
        date: new Date().toISOString().slice(0, 10)
      }));
    } finally {
      setTimeout(() => setIsRefreshing(false), 500);
    }
  };

  // Filter bookmarked articles
  const bookmarkedArticlesList = articles.filter(a => bookmarks.includes(a.id));

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors selection:bg-sky-200 dark:selection:bg-sky-900">
      {/* Security & Copyright Shield (Right click interception & citation append on copy) */}
      <SecurityShield />

      {/* Top Header */}
      <Header
        onOpenCopyright={() => setIsCopyrightOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarkCount={bookmarks.length}
        isOnline={isOnline}
        onRefreshData={handleRefreshData}
        isRefreshing={isRefreshing}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6 sm:pt-8 pb-20">
        {/* Navigation Tabs (Feed vs Quantitative Hub) */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('feed')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'feed'
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>{t('navAll')}</span>
            </button>

            <button
              onClick={() => setActiveTab('charts')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'charts'
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>{t('navChartsHub')}</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-stone-500">
            <span>2026 最新官方數據庫 · 客觀對比</span>
          </div>
        </div>

        {/* Tab 1: Feed View */}
        {activeTab === 'feed' && (
          <div className="space-y-6 animate-fade-in">
            {/* Morning Brief Banner */}
            <MorningBriefBanner
              brief={morningBrief}
              onRefresh={handleRefreshData}
              isRefreshing={isRefreshing}
              onExploreMetrics={() => setActiveTab('charts')}
            />

            {/* News Feed Grid */}
            <NewsFeed
              articles={articles}
              onSelectArticle={(article) => setSelectedArticle(article)}
              onStartAudio={(article) => handleStartAudio(article)}
              isBookmarked={(id) => isBookmarked(id)}
              onToggleBookmark={(article) => toggleBookmark(article.id, article)}
              currentPlayingId={speechReader.isPlaying || speechReader.isPaused ? speechReader.currentArticleId : null}
            />
          </div>
        )}

        {/* Tab 2: Quantitative Visual Charts Hub */}
        {activeTab === 'charts' && (
          <div className="animate-fade-in">
            <QuantitativeHub />
          </div>
        )}
      </main>

      {/* Article Detail Reading Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        isBookmarked={selectedArticle ? isBookmarked(selectedArticle.id) : false}
        onToggleBookmark={() => {
          if (selectedArticle) {
            toggleBookmark(selectedArticle.id, selectedArticle);
          }
        }}
        onStartAudio={(paragraphs) => {
          if (selectedArticle) {
            speechReader.playArticle(selectedArticle.id, l(selectedArticle.title), paragraphs);
          }
        }}
        isAudioPlayingThis={
          (speechReader.isPlaying || speechReader.isPaused) &&
          speechReader.currentArticleId === selectedArticle?.id
        }
        currentSpeakingIndex={speechReader.currentParagraphIndex}
      />

      {/* Floating Bottom Audio Reader Bar */}
      <AudioReaderBar
        isPlaying={speechReader.isPlaying}
        isPaused={speechReader.isPaused}
        title={speechReader.currentArticleTitle}
        currentIndex={speechReader.currentParagraphIndex}
        totalIndex={speechReader.totalParagraphs}
        speed={speechReader.playbackSpeed}
        onPause={speechReader.pause}
        onResume={speechReader.resume}
        onStop={speechReader.stop}
        onChangeSpeed={speechReader.changeSpeed}
        onOpenArticle={() => {
          const article = articles.find(a => a.id === speechReader.currentArticleId);
          if (article) setSelectedArticle(article);
        }}
      />

      {/* Bookmarks & Offline Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedArticles={bookmarkedArticlesList}
        onSelectArticle={(article) => setSelectedArticle(article)}
        onRemoveBookmark={(id) => toggleBookmark(id)}
        onExport={() => exportBookmarks(articles)}
      />

      {/* Copyright & Legal Notice Modal */}
      <CopyrightNoticeModal
        isOpen={isCopyrightOpen}
        onClose={() => setIsCopyrightOpen(false)}
      />

      {/* Comprehensive Footer */}
      <Footer onOpenCopyright={() => setIsCopyrightOpen(true)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
