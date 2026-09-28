/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NewsArticle, PillarCategory } from '../types/news';
import { useLanguage } from '../context/LanguageContext';
import { VisualChart } from './VisualChart';
import {
  Volume2,
  Bookmark,
  BookmarkCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  Layers
} from 'lucide-react';

interface NewsFeedProps {
  articles: NewsArticle[];
  onSelectArticle: (article: NewsArticle) => void;
  onStartAudio: (article: NewsArticle) => void;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (article: NewsArticle) => void;
  currentPlayingId: string | null;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({
  articles,
  onSelectArticle,
  onStartAudio,
  isBookmarked,
  onToggleBookmark,
  currentPlayingId
}) => {
  const { t, l, lArr } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<PillarCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category filter tabs
  const categories: { id: PillarCategory | 'all'; labelKey: string }[] = [
    { id: 'all', labelKey: 'navAll' },
    { id: 'ppp', labelKey: 'navPPP' },
    { id: 'salary', labelKey: 'navSalary' },
    { id: 'housing', labelKey: 'navHousing' },
    { id: 'healthcare', labelKey: 'navHealthcare' },
    { id: 'pension', labelKey: 'navPension' },
    { id: 'public_goods', labelKey: 'navPublicGoods' },
    { id: 'culture_wellbeing', labelKey: 'navCulture' },
    { id: 'semiconductor', labelKey: 'navSemiconductor' }
  ];

  // Filtering logic
  const filteredArticles = articles.filter(article => {
    const matchesPillar = selectedPillar === 'all' || article.pillar === selectedPillar;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesPillar;

    const titleStr = (article.title['zh-TW'] + article.title['zh-CN'] + article.title.en).toLowerCase();
    const summaryStr = (article.summary['zh-TW'] + article.summary['zh-CN'] + article.summary.en).toLowerCase();
    const kickerStr = (article.kicker['zh-TW'] + article.kicker['zh-CN'] + article.kicker.en).toLowerCase();

    return matchesPillar && (titleStr.includes(q) || summaryStr.includes(q) || kickerStr.includes(q));
  });

  const featuredArticle = filteredArticles.find(a => a.isFeatured) || filteredArticles[0];
  const secondaryArticles = filteredArticles.filter(a => a.id !== featuredArticle?.id);

  return (
    <div className="space-y-6">
      {/* Category Filter & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
        {/* Category Segmented Scroll */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedPillar(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedPillar === cat.id
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-sky-500 transition-all"
          />
        </div>
      </div>

      {/* Featured Lead Story (Hero Card) */}
      {featuredArticle && (
        <article className="group relative rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image section */}
            <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-stone-100 dark:bg-stone-800">
              <img
                src={featuredArticle.imageUrl}
                alt={l(featuredArticle.title)}
                draggable={false}
                onError={(e) => {
                  const target = e.currentTarget;
                  const backup = 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80';
                  if (target.src !== backup) {
                    target.src = backup;
                  }
                }}
                className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-103 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-mono tracking-wider uppercase font-semibold">
                {t('todayTopStory')}
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[9px] font-mono">
                Unsplash 免費授權無侵權
              </div>
            </div>

            {/* Content section */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400">
                  <span className="font-semibold text-sky-700 dark:text-sky-400 uppercase">
                    {l(featuredArticle.kicker)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTimeMinutes} {t('readTime')}</span>
                  </span>
                </div>

                <h3
                  onClick={() => onSelectArticle(featuredArticle)}
                  className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 leading-snug cursor-pointer group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors"
                >
                  {l(featuredArticle.title)}
                </h3>

                <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed line-clamp-3">
                  {l(featuredArticle.summary)}
                </p>

                {/* 30s Takeaways Pill List */}
                <div className="space-y-1.5 pt-1">
                  {lArr(featuredArticle.keyTakeaways).slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onStartAudio(featuredArticle)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      currentPlayingId === featuredArticle.id
                        ? 'bg-sky-600 text-white animate-pulse'
                        : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{currentPlayingId === featuredArticle.id ? t('listening') : t('listenArticle')}</span>
                  </button>

                  <button
                    onClick={() => onToggleBookmark(featuredArticle)}
                    className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
                    title={isBookmarked(featuredArticle.id) ? t('bookmarked') : t('bookmark')}
                  >
                    {isBookmarked(featuredArticle.id) ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-600 fill-amber-500" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <button
                  onClick={() => onSelectArticle(featuredArticle)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span>閱讀全文與深度解析</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Secondary Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {secondaryArticles.map(article => {
          const isPlayingThis = currentPlayingId === article.id;
          const bookmarked = isBookmarked(article.id);

          return (
            <article
              key={article.id}
              className="flex flex-col justify-between rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden shadow-xs hover:shadow-md transition-all group"
            >
              <div>
                {/* Thumbnail */}
                <div
                  onClick={() => onSelectArticle(article)}
                  className="relative aspect-16/9 overflow-hidden bg-stone-100 dark:bg-stone-800 cursor-pointer"
                >
                  <img
                    src={article.imageUrl}
                    alt={l(article.title)}
                    draggable={false}
                    onError={(e) => {
                      const target = e.currentTarget;
                      const backup = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
                      if (target.src !== backup) {
                        target.src = backup;
                      }
                    }}
                    className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-104 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono uppercase">
                    {l(article.kicker)}
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.2 rounded bg-black/60 text-[8px] text-stone-200 font-mono backdrop-blur-xs">
                    Unsplash 自由授權
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                    <span>{article.sourceAuthority}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTimeMinutes} {t('readTime')}</span>
                    </span>
                  </div>

                  <h4
                    onClick={() => onSelectArticle(article)}
                    className="text-base font-bold font-serif text-stone-900 dark:text-stone-100 leading-snug line-clamp-2 cursor-pointer group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors"
                  >
                    {l(article.title)}
                  </h4>

                  <p className="text-xs text-stone-700 dark:text-stone-200 leading-relaxed line-clamp-2">
                    {l(article.summary)}
                  </p>

                  {/* Compact Visual Chart preview if article contains quantitative metrics */}
                  {article.metrics && article.metrics.length > 0 && (
                    <div className="pt-1">
                      <VisualChart
                        metrics={article.metrics.slice(0, 1)}
                        compact={true}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-5 sm:pb-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onStartAudio(article)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      isPlayingThis
                        ? 'bg-sky-600 text-white animate-pulse'
                        : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <Volume2 className="w-3 h-3" />
                    <span>{isPlayingThis ? t('listening') : t('listenArticle')}</span>
                  </button>

                  <button
                    onClick={() => onToggleBookmark(article)}
                    className="p-1 rounded-md border border-stone-200 dark:border-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
                    title={bookmarked ? t('bookmarked') : t('bookmark')}
                  >
                    {bookmarked ? (
                      <BookmarkCheck className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                    ) : (
                      <Bookmark className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <button
                  onClick={() => onSelectArticle(article)}
                  className="font-medium text-stone-800 dark:text-stone-200 hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1 transition-colors"
                >
                  <span>全文</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
