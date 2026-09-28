/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, Square, Volume2, FastForward, X } from 'lucide-react';

interface AudioReaderBarProps {
  isPlaying: boolean;
  isPaused: boolean;
  title: string;
  currentIndex: number;
  totalIndex: number;
  speed: number;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onChangeSpeed: (speed: number) => void;
  onOpenArticle?: () => void;
}

export const AudioReaderBar: React.FC<AudioReaderBarProps> = ({
  isPlaying,
  isPaused,
  title,
  currentIndex,
  totalIndex,
  speed,
  onPause,
  onResume,
  onStop,
  onChangeSpeed,
  onOpenArticle
}) => {
  const { t } = useLanguage();

  if (!isPlaying && !isPaused) return null;

  const speeds = [0.75, 1.0, 1.25, 1.5];

  const handleNextSpeed = () => {
    const currentIdx = speeds.indexOf(speed);
    const nextIdx = (currentIdx + 1) % speeds.length;
    onChangeSpeed(speeds[nextIdx]);
  };

  return (
    <aside aria-label="Audio player" className="fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 dark:bg-stone-950/95 text-stone-100 backdrop-blur-md border-t border-stone-800 shadow-2xl px-4 py-3 transition-transform duration-300">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Wave & Info */}
        <div className="flex items-center gap-3 min-w-0 max-w-md">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-sky-600/20 text-sky-400 border border-sky-500/30 shrink-0">
            <Volume2 className="w-5 h-5 animate-pulse" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-sky-400 font-semibold">
                {isPaused ? t('pause') : t('listening')}
              </span>
              <span className="text-stone-500 text-xs">·</span>
              <span className="text-xs text-stone-400 font-mono">
                {currentIndex + 1} / {totalIndex} 段落
              </span>
            </div>
            <button
              onClick={onOpenArticle}
              className="text-sm font-medium text-stone-200 hover:text-white truncate block text-left underline-offset-2 hover:underline transition-colors"
              title={title}
            >
              {title}
            </button>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-2">
          {isPaused ? (
            <button
              onClick={onResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs shadow-md transition-colors"
              title={t('resume')}
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{t('resume')}</span>
            </button>
          ) : (
            <button
              onClick={onPause}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs transition-colors border border-stone-700"
              title={t('pause')}
            >
              <Pause className="w-4 h-4 fill-stone-200" />
              <span>{t('pause')}</span>
            </button>
          )}

          <button
            onClick={onStop}
            className="p-2 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            title={t('stop')}
          >
            <Square className="w-3.5 h-3.5 fill-stone-300" />
          </button>

          {/* Speed Toggle */}
          <button
            onClick={handleNextSpeed}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs font-mono transition-colors border border-stone-700/80"
            title="調整語速"
          >
            <FastForward className="w-3.5 h-3.5 text-stone-400" />
            <span>{speed}x</span>
          </button>
        </div>

        {/* Right: Close bar */}
        <div className="flex items-center">
          <button
            onClick={onStop}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
            title={t('close')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
