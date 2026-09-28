/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NewsArticle } from '../types/news';
import { useLanguage } from '../context/LanguageContext';
import { VisualChart } from './VisualChart';
import {
  X,
  Volume2,
  Bookmark,
  BookmarkCheck,
  Sparkles,
  Shield,
  Clock,
  ExternalLink,
  Type,
  TrendingUp,
  Share2
} from 'lucide-react';

interface ArticleModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onStartAudio: (paragraphs: string[]) => void;
  isAudioPlayingThis: boolean;
  currentSpeakingIndex: number;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onStartAudio,
  isAudioPlayingThis,
  currentSpeakingIndex
}) => {
  const { t, l, lArr } = useLanguage();
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'xlarge'>('standard');

  if (!isOpen || !article) return null;

  const fontClasses = {
    standard: 'text-base leading-relaxed',
    large: 'text-lg leading-loose',
    xlarge: 'text-xl leading-loose'
  };

  const paragraphs = lArr(article.content);

  const handleAudioClick = () => {
    onStartAudio(paragraphs);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/75 backdrop-blur-sm animate-fade-in">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
      >
        {/* Sticky Action Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <span className="font-semibold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
              {l(article.kicker)}
            </span>
            <span>·</span>
            <span>{article.sourceAuthority}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font Size Selector */}
            <div className="flex items-center rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 p-0.5 text-xs">
              <button
                onClick={() => setFontSize('standard')}
                className={`px-2 py-1 rounded ${fontSize === 'standard' ? 'bg-white dark:bg-stone-700 font-bold shadow-xs' : 'text-stone-500'}`}
                title={t('fontStandard')}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded text-sm ${fontSize === 'large' ? 'bg-white dark:bg-stone-700 font-bold shadow-xs' : 'text-stone-500'}`}
                title={t('fontLarge')}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded text-base ${fontSize === 'xlarge' ? 'bg-white dark:bg-stone-700 font-bold shadow-xs' : 'text-stone-500'}`}
                title={t('fontXLarge')}
              >
                A++
              </button>
            </div>

            {/* TTS Audio Trigger */}
            <button
              onClick={handleAudioClick}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isAudioPlayingThis
                  ? 'bg-sky-600 text-white animate-pulse'
                  : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">{isAudioPlayingThis ? t('listening') : t('listenArticle')}</span>
            </button>

            {/* Bookmark */}
            <button
              onClick={onToggleBookmark}
              className={`p-2 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-400'
                  : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
              title={isBookmarked ? t('bookmarked') : t('bookmark')}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title={t('close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Container */}
        <div className="p-6 md:p-10 max-w-3xl mx-auto w-full space-y-6">
          {/* Article Header */}
          <div className="space-y-3 border-b border-stone-200 dark:border-stone-800 pb-5">
            <h2 id="article-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-stone-900 dark:text-stone-100 leading-tight">
              {l(article.title)}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 dark:text-stone-400 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTimeMinutes} {t('readTime')}</span>
              </span>
              <span>·</span>
              <span>{t('sourceCitation')}: {article.source}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>公信數據查核</span>
              </span>
            </div>
          </div>

          {/* 30-Second Bullet Takeaways Box */}
          <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/80 dark:border-sky-800/80 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-800 dark:text-sky-300 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('bulletTakeaways')}</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-800 dark:text-stone-100">
              {lArr(article.keyTakeaways).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400 mt-2 shrink-0" />
                  <span className="leading-relaxed font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Image */}
          {article.imageUrl && (
            <div className="relative rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 aspect-video max-h-80">
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
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/70 text-white text-[10px] font-mono backdrop-blur-xs flex items-center gap-1.5">
                <span className="text-emerald-400">●</span>
                <span>兩岸民生觀測站 · Unsplash 自由授權無侵權</span>
              </div>
            </div>
          )}

          {/* Main Article Paragraphs with Speech Tracking */}
          <div className={`space-y-5 text-stone-800 dark:text-stone-200 font-sans ${fontClasses[fontSize]}`}>
            {paragraphs.map((p, idx) => {
              // Note: paragraph 0 in speech reader is title, paragraph idx+1 is paragraph text
              const isCurrentSpeech = isAudioPlayingThis && currentSpeakingIndex === idx + 1;

              return (
                <p
                  key={idx}
                  className={`transition-all duration-300 rounded-lg p-2 ${
                    isCurrentSpeech
                      ? 'bg-sky-100/80 dark:bg-sky-950/60 border-l-4 border-sky-600 dark:border-sky-400 pl-3 font-medium text-stone-900 dark:text-stone-100 shadow-xs'
                      : 'hover:bg-stone-50/50 dark:hover:bg-stone-800/50'
                  }`}
                >
                  {p}
                </p>
              );
            })}
          </div>

          {/* Quantitative Visual Chart Section (if article has metrics) */}
          {article.metrics && article.metrics.length > 0 && (
            <div className="pt-2">
              <VisualChart
                metrics={article.metrics}
                title={`${l(article.title)} · 量化數據對比`}
                subtitle="數據來源：IMF / 兩岸官方統計數據庫"
              />
            </div>
          )}

          {/* Gemini AI Deep Perspective Analysis Box */}
          {article.deepAnalysis && (
            <div className="p-5 rounded-2xl bg-stone-100/90 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 space-y-3.5">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100">
                <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <h4 className="font-semibold text-sm font-serif">{t('deepAnalysis')}</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-white dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-1.5">
                  <span className="font-bold text-sky-700 dark:text-sky-300 block">
                    {t('contextAnalysis')}
                  </span>
                  <p className="text-stone-700 dark:text-stone-100 leading-relaxed font-sans">
                    {l(article.deepAnalysis.context)}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-1.5">
                  <span className="font-bold text-amber-700 dark:text-amber-300 block">
                    {t('mechanismAnalysis')}
                  </span>
                  <p className="text-stone-700 dark:text-stone-100 leading-relaxed font-sans">
                    {l(article.deepAnalysis.coreMechanism)}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-1.5">
                  <span className="font-bold text-emerald-700 dark:text-emerald-300 block">
                    {t('futureOutlook')}
                  </span>
                  <p className="text-stone-700 dark:text-stone-100 leading-relaxed font-sans">
                    {l(article.deepAnalysis.outlook2026)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer Copyright & Fair Use Statement */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400 space-y-2">
            <div className="flex items-center gap-1.5 font-semibold text-stone-700 dark:text-stone-300">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              <span>{t('copyrightNotice')}</span>
            </div>
            <p className="leading-relaxed">
              {t('copyrightDesc')} {t('disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
