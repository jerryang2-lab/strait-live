/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Language } from '../types/news';
import {
  Globe2,
  Moon,
  Sun,
  Bookmark,
  Shield,
  Wifi,
  WifiOff,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  onOpenCopyright: () => void;
  onOpenBookmarks: () => void;
  bookmarkCount: number;
  isOnline: boolean;
  onRefreshData?: () => void;
  isRefreshing?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCopyright,
  onOpenBookmarks,
  bookmarkCount,
  isOnline,
  onRefreshData,
  isRefreshing
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header className="sticky top-0 z-30 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      {/* Top micro ticker with copyright & authority note */}
      <div className="bg-stone-900 text-stone-300 dark:bg-stone-900/90 text-[11px] px-4 py-1.5 font-mono border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-stone-100">
              {t('siteTagline')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-stone-400">
              {isOnline ? (
                <>
                  <Wifi className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] text-emerald-300">{t('offlineStatusOnline')}</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-amber-400" />
                  <span className="text-[10px] text-amber-300">{t('offlineStatusOffline')}</span>
                </>
              )}
            </div>

            <button
              onClick={onOpenCopyright}
              className="hover:text-stone-100 text-[10px] underline underline-offset-2 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              <span>{t('copyrightTitle')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Editorial Title */}
          <div className="flex items-baseline gap-3">
            <a href="#" className="group block">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-700 dark:bg-sky-600 text-white flex items-center justify-center font-serif font-black text-lg shadow-sm">
                  兩
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-serif group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                    {t('siteName')}
                  </h1>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 font-sans tracking-wide">
                    {t('siteSub')}
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Language Switcher */}
            <div className="flex items-center rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/80 p-0.5 text-xs font-medium">
              <button
                onClick={() => handleLanguageChange('zh-TW')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  language === 'zh-TW'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                繁中
              </button>
              <button
                onClick={() => handleLanguageChange('zh-CN')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  language === 'zh-CN'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                简中
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title={theme === 'dark' ? '切換淺色模式' : '切換深色模式'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
            </button>

            {/* Bookmarks Drawer Trigger */}
            <button
              onClick={onOpenBookmarks}
              aria-label="Bookmarks"
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-xs font-medium"
            >
              <Bookmark className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="hidden sm:inline">{t('navBookmarks')}</span>
              {bookmarkCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-sky-600 text-white text-[10px] font-mono font-bold">
                  {bookmarkCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
