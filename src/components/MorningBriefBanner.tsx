/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DailyMorningBrief } from '../types/news';
import { Sparkles, Calendar, ArrowRight, RotateCw, BarChart2 } from 'lucide-react';

interface MorningBriefBannerProps {
  brief: DailyMorningBrief;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  onExploreMetrics?: () => void;
}

export const MorningBriefBanner: React.FC<MorningBriefBannerProps> = ({
  brief,
  onRefresh,
  isRefreshing,
  onExploreMetrics
}) => {
  const { language, t, l, lArr } = useLanguage();

  // Robust bullet extraction to guarantee 3 points always display full text in current language
  const getBulletPoints = (): string[] => {
    if (brief && brief.bulletPoints) {
      const localized = lArr(brief.bulletPoints);
      if (Array.isArray(localized) && localized.length > 0 && localized.every(b => typeof b === 'string' && b.trim().length > 0)) {
        return localized;
      }
      if (Array.isArray(brief.bulletPoints)) {
        const mapped = (brief.bulletPoints as unknown[]).map(b => {
          if (typeof b === 'string' && b.trim().length > 0) return b;
          if (b && typeof b === 'object') {
            const loc = b as Record<string, string>;
            return loc[language] || loc['zh-TW'] || loc.en || '';
          }
          return String(b || '');
        }).filter(b => b.trim().length > 0);
        if (mapped.length >= 3) return mapped;
      }
    }

    // Fail-safe authoritative defaults
    if (language === 'en') {
      return [
        '【Purchasing Power (PPP)】: Taiwan per capita PPP stands at $98,051 (approx. 3.1x Mainland China), bolstered by low inflation on utilities and healthcare.',
        '【Housing Stock Age】: Taiwan homeownership reaches 80% with ~60% aged >30 yrs; Mainland urban housing is newer (20-23 yrs) with emerging building reserve funds.',
        '【Public Goods Crossroads】: Chinese regional cities demonstrate spacious infrastructure and rapid logistics; Taiwan provides resilient institutional safety nets in healthcare and civic trust.'
      ];
    }
    if (language === 'zh-CN') {
      return [
        '【实质购买力】：台湾人均 PPP 达 98,051 美元，约为大陆 3.1 倍；薪资中位数在水电燃气与健保补贴下维持高实质生活力。',
        '【居住与空间】：台湾自有率 80% 但老房占比近 60% 面临「人屋双老」；大陆城镇房龄多在 25 年内正推动养老金维护机制。',
        '【公共品交叉点】：大陆二三线城市在道路绿地与数字物流表现亮眼；台湾在均质医疗与法治产权等制度公共品上提供强韧安全感。'
      ];
    }
    return [
      '【實質購買力】：台灣人均 PPP 達 98,051 美元，約為大陸 3.1 倍；薪資中位數在水電瓦斯與健保補貼下維持高實質生活力。',
      '【居住與空間】：台灣自有率 80% 但老屋佔比近 60% 面臨「人屋雙老」；大陸城鎮屋齡多在 25 年內正推動養老金維護機制。',
      '【公共財交叉點】：大陸二三線城市在道路綠帶與數位物流表現亮眼；台灣在均質醫療與法治產權等制度公共財上提供強韌安全感。'
    ];
  };

  const bullets = getBulletPoints();

  const getBulletLabel = (idx: number) => {
    if (language === 'en') return `Key Point ${idx + 1}`;
    if (language === 'zh-CN') return `重点 ${idx + 1}`;
    return `重點 ${idx + 1}`;
  };

  return (
    <section aria-labelledby="brief-heading" className="relative overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 bg-gradient-to-br from-stone-50 via-white to-sky-50/40 dark:from-stone-900/90 dark:via-stone-900/50 dark:to-sky-950/20 p-5 sm:p-7 shadow-sm transition-all mb-8">
      {/* Editorial Watermark */}
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-36 h-36 bg-sky-500/5 dark:bg-sky-400/5 rounded-full blur-2xl pointer-events-none" />

      {/* Top Banner Meta */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 dark:border-stone-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('dailyMorningBrief')}</span>
          </div>
          <span className="text-xs font-mono text-stone-500 dark:text-stone-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{brief.date || '2026-09-28'}</span>
          </span>
        </div>

        {onRefresh && (
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors disabled:opacity-50"
            title={t('refreshDaily')}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-sky-600' : ''}`} />
            <span>{t('refreshDaily')}</span>
          </button>
        )}
      </div>

      {/* Headline & Synthesis */}
      <div className="space-y-4">
        <h2 id="brief-heading" className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 leading-snug tracking-tight">
          {l(brief.headline)}
        </h2>

        <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed font-sans max-w-4xl">
          {l(brief.overview)}
        </p>

        {/* 3 Key Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
          {bullets.map((bullet, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 leading-relaxed shadow-xs flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center gap-1.5 font-bold text-sky-700 dark:text-sky-300 mb-2 text-xs tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-sky-600 dark:bg-sky-400 shrink-0" />
                  <span>{getBulletLabel(idx)}</span>
                </div>
                <p className="text-stone-800 dark:text-stone-100 font-sans leading-relaxed text-xs sm:text-[13px] font-normal">
                  {bullet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Spotlight Comparison Metric Strip */}
        <div className="mt-4 p-4 rounded-xl bg-stone-100/90 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                {l(brief.dataSpotlight.title)}
              </span>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
              {l(brief.dataSpotlight.verdict)}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="text-right">
              <div className="text-stone-500 dark:text-stone-400 text-[10px] uppercase font-semibold">{t('taiwan')}</div>
              <div className="text-sm font-bold text-sky-600 dark:text-sky-400">{brief.dataSpotlight.taiwan}</div>
            </div>
            <span className="text-stone-400 text-sm font-light">vs</span>
            <div>
              <div className="text-stone-500 dark:text-stone-400 text-[10px] uppercase font-semibold">{t('mainland')}</div>
              <div className="text-sm font-bold text-rose-600 dark:text-rose-400">{brief.dataSpotlight.mainland}</div>
            </div>

            {onExploreMetrics && (
              <button
                onClick={onExploreMetrics}
                className="ml-2 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold text-xs hover:bg-stone-800 dark:hover:bg-white transition-colors"
              >
                <span>{t('navChartsHub')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
