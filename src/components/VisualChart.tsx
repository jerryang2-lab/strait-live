/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { QuantitativeMetric } from '../types/news';
import { useLanguage } from '../context/LanguageContext';
import { BarChart3, TrendingUp, ShieldCheck } from 'lucide-react';

interface VisualChartProps {
  metrics: QuantitativeMetric[];
  title?: string;
  subtitle?: string;
  distributionData?: {
    label: { 'zh-TW': string; 'zh-CN': string; en: string };
    taiwanPct: number;
    mainlandPct: number;
  }[];
  compact?: boolean;
}

export const VisualChart: React.FC<VisualChartProps> = ({
  metrics,
  title,
  subtitle,
  distributionData,
  compact = false
}) => {
  const { t, l } = useLanguage();

  if (!metrics || metrics.length === 0) return null;

  return (
    <div className={`rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/60 p-4 md:p-5 transition-all ${compact ? 'text-xs' : 'text-sm'}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 tracking-tight">
              {title || t('visualChartTitle')}
            </h4>
            {subtitle && (
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-sky-600 dark:bg-sky-500" />
            <span className="font-medium text-stone-700 dark:text-stone-300">{t('taiwan')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-600 dark:bg-rose-500" />
            <span className="font-medium text-stone-700 dark:text-stone-300">{t('mainland')}</span>
          </div>
        </div>
      </div>

      {/* Metrics List */}
      <div className="space-y-5">
        {metrics.map((metric) => {
          const maxVal = Math.max(metric.taiwanNumeric, metric.mainlandNumeric) || 1;
          const twWidthPct = Math.max(8, Math.min(100, (metric.taiwanNumeric / maxVal) * 100));
          const cnWidthPct = Math.max(8, Math.min(100, (metric.mainlandNumeric / maxVal) * 100));

          return (
            <div key={metric.id} className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium text-stone-900 dark:text-stone-200">
                  {l(metric.indicator)}
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                  {metric.year} · {metric.sourceAuthority}
                </span>
              </div>

              {/* Taiwan Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-sky-700 dark:text-sky-300 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 inline-block" />
                    {t('taiwan')}
                  </span>
                  <span className="font-mono font-semibold text-stone-800 dark:text-stone-200">
                    {metric.taiwanValue} <span className="font-normal text-stone-500">({l(metric.taiwanUnit)})</span>
                  </span>
                </div>
                <div className="w-full bg-stone-200/80 dark:bg-stone-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-600 to-sky-500 dark:from-sky-500 dark:to-sky-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${twWidthPct}%` }}
                  />
                </div>
              </div>

              {/* Mainland Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-rose-700 dark:text-rose-300 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 inline-block" />
                    {t('mainland')}
                  </span>
                  <span className="font-mono font-semibold text-stone-800 dark:text-stone-200">
                    {metric.mainlandValue} <span className="font-normal text-stone-500">({l(metric.mainlandUnit)})</span>
                  </span>
                </div>
                <div className="w-full bg-stone-200/80 dark:bg-stone-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-600 to-rose-500 dark:from-rose-500 dark:to-rose-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${cnWidthPct}%` }}
                  />
                </div>
              </div>

              {/* Ratio Explanation Pill */}
              <div className="flex items-start gap-1.5 text-xs text-stone-700 dark:text-stone-200 bg-stone-100/90 dark:bg-stone-800/90 p-2.5 rounded-lg border border-stone-200/80 dark:border-stone-700">
                <TrendingUp className="w-3.5 h-3.5 mt-0.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="leading-snug">{l(metric.ratioExplanation)}</span>
              </div>
            </div>
          );
        })}

        {/* Stacked Distribution Data (if available, e.g. housing age) */}
        {distributionData && distributionData.length > 0 && (
          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 space-y-3">
            <h5 className="text-xs font-semibold text-stone-700 dark:text-stone-300">
              {t('navHousing')} · 年齡結構分佈堆疊對比 (%)
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Taiwan Distribution */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-stone-700 dark:text-stone-300">
                  <span className="font-medium text-sky-700 dark:text-sky-300">{t('taiwan')}</span>
                  <span className="text-[11px] text-stone-500">30年以上老宅近 60%</span>
                </div>
                <div className="flex h-5 w-full rounded-md overflow-hidden bg-stone-200 dark:bg-stone-800">
                  {distributionData.map((seg, idx) => (
                    <div
                      key={idx}
                      title={`${l(seg.label)}: ${seg.taiwanPct}%`}
                      className={`h-full flex items-center justify-center text-[10px] text-white font-mono font-medium ${
                        idx === 0 ? 'bg-sky-400' : idx === 1 ? 'bg-sky-600' : 'bg-slate-700'
                      }`}
                      style={{ width: `${seg.taiwanPct}%` }}
                    >
                      {seg.taiwanPct > 12 ? `${seg.taiwanPct}%` : ''}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mainland Distribution */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-stone-700 dark:text-stone-300">
                  <span className="font-medium text-rose-700 dark:text-rose-300">{t('mainland')}</span>
                  <span className="text-[11px] text-stone-500">新屋與存量房多在25年內</span>
                </div>
                <div className="flex h-5 w-full rounded-md overflow-hidden bg-stone-200 dark:bg-stone-800">
                  {distributionData.map((seg, idx) => (
                    <div
                      key={idx}
                      title={`${l(seg.label)}: ${seg.mainlandPct}%`}
                      className={`h-full flex items-center justify-center text-[10px] text-white font-mono font-medium ${
                        idx === 0 ? 'bg-rose-400' : idx === 1 ? 'bg-rose-600' : 'bg-amber-700'
                      }`}
                      style={{ width: `${seg.mainlandPct}%` }}
                    >
                      {seg.mainlandPct > 12 ? `${seg.mainlandPct}%` : ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Distribution Legend */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-stone-500 dark:text-stone-400 pt-1">
              {distributionData.map((seg, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-xs ${
                      idx === 0 ? 'bg-sky-400 dark:bg-sky-400' : idx === 1 ? 'bg-sky-600 dark:bg-sky-600' : 'bg-slate-700'
                    }`}
                  />
                  <span>{l(seg.label)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Authority Badge */}
      <div className="mt-4 pt-2.5 border-t border-stone-200/80 dark:border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 font-mono">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{t('sourceCitation')}: IMF / 台灣主計總處 / 國家統計局 (2026)</span>
        </div>
        <span>{t('disclaimer').slice(0, 18)}...</span>
      </div>
    </div>
  );
};
