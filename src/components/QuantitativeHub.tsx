/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { quantitativeDatasets } from '../data/authoritativeData';
import { PillarCategory } from '../types/news';
import { useLanguage } from '../context/LanguageContext';
import { VisualChart } from './VisualChart';
import { BarChart3, Database, ShieldCheck, ArrowUpDown } from 'lucide-react';

export const QuantitativeHub: React.FC = () => {
  const { t, l } = useLanguage();
  const [activePillar, setActivePillar] = useState<PillarCategory | 'all'>('all');

  const filteredDatasets = activePillar === 'all'
    ? quantitativeDatasets
    : quantitativeDatasets.filter(d => d.pillar === activePillar);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/60 p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-semibold text-xs tracking-wider uppercase">
          <Database className="w-4 h-4" />
          <span>國際權威資料庫 · 兩岸量化分析視覺化圖表</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 dark:text-stone-100">
          兩岸民生八大維度量化數據對照儀表板
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
          彙整 2026 年最新公信統計（國際貨幣基金組織 IMF、世界衛生組織 WHO、世界銀行、台灣主計總處、大陸國家統計局及聯合國幸福報告），透過視覺化長條圖、比例堆疊圖與指數計量儀，客觀呈現真實數據。
        </p>

        {/* Pillar filter strip */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActivePillar('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activePillar === 'all'
                ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold shadow-xs'
                : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 border border-stone-200 dark:border-stone-700'
            }`}
          >
            全部維度 ({quantitativeDatasets.length})
          </button>
          {quantitativeDatasets.map(ds => (
            <button
              key={ds.pillar}
              onClick={() => setActivePillar(ds.pillar)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activePillar === ds.pillar
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold shadow-xs'
                  : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 border border-stone-200 dark:border-stone-700'
              }`}
            >
              {l(ds.title).slice(0, 10)}...
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Quantitative Visual Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDatasets.map(dataset => (
          <div
            key={dataset.pillar}
            className="flex flex-col justify-between rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 md:p-6 shadow-xs hover:shadow-md transition-all space-y-4"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                {l(dataset.title)}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {l(dataset.subtitle)}
              </p>
              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 text-xs text-stone-800 dark:text-stone-100 leading-relaxed font-sans">
                {l(dataset.summary)}
              </div>
            </div>

            {/* Visual Chart */}
            <VisualChart
              metrics={dataset.metrics}
              distributionData={dataset.distributionData}
            />

            {/* Citations list */}
            <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-400 dark:text-stone-500 font-mono">
              <span>引用：{dataset.sources.join(' · ')}</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>國際公信查核</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
