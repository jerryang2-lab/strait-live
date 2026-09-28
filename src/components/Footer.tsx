/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, ExternalLink, Lock, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenCopyright: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCopyright }) => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 bg-stone-900 text-stone-300 border-t border-stone-800 text-xs">
      {/* Top Banner: Formal Copyright Notice */}
      <div className="border-b border-stone-800 bg-stone-950/70 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-stone-100 font-serif font-bold text-sm">
              <Shield className="w-4 h-4 text-sky-400" />
              <span>兩岸民生觀測站 · 官方版權與智財權宣告</span>
            </div>
            <p className="text-stone-400 text-xs font-sans max-w-3xl leading-relaxed">
              {t('copyrightNotice')} {t('copyrightDesc')}
            </p>
          </div>

          <button
            onClick={onOpenCopyright}
            className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-medium text-xs border border-stone-700 transition-colors shrink-0"
          >
            檢視完整引用規範與條款
          </button>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: About */}
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-sky-600 text-white flex items-center justify-center font-serif font-bold text-xs">
              兩
            </div>
            <h4 className="font-bold text-sm text-stone-100 font-serif">
              {t('siteName')}
            </h4>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed max-w-md">
            本站專注於兩岸實質購買力平價（PPP）、薪資所得中位數、住房地權與屋齡結構、醫療公衛指數、退休養老保障以及公共財累積之客觀實證比較。
          </p>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>嚴格事實查核 · 杜絕泛政治與虛假資訊</span>
          </div>
        </div>

        {/* Col 2: Authoritative Sources */}
        <div className="space-y-2">
          <h5 className="font-semibold text-stone-200 font-mono text-xs uppercase tracking-wider">
            國際公信資料庫
          </h5>
          <ul className="space-y-1.5 text-stone-400 text-xs font-mono">
            <li>• IMF 國際貨幣基金 (2026)</li>
            <li>• 台灣行政院主計總處 (DGBAS)</li>
            <li>• 中國大陸國家統計局 (NBS)</li>
            <li>• 世界衛生組織 (WHO) / Numbeo</li>
            <li>• 世界銀行 (World Bank)</li>
            <li>• 聯合國幸福報告 (SDSN)</li>
          </ul>
        </div>

        {/* Col 3: Research Pillars */}
        <div className="space-y-2">
          <h5 className="font-semibold text-stone-200 font-mono text-xs uppercase tracking-wider">
            八大實證觀測維度
          </h5>
          <ul className="space-y-1.5 text-stone-400 text-xs">
            <li>• 實質購買力平價 (PPP)</li>
            <li>• 薪資中位數與可支配所得</li>
            <li>• 住房屋齡與永久產權結構</li>
            <li>• 全民健保與重大疾病保障</li>
            <li>• 退休養老與所得替代率</li>
            <li>• 公共財與城鄉生活體感</li>
            <li>• 文化生活與非物質量化</li>
            <li>• 半導體產業鏈自主性</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/80 py-4 px-4 bg-stone-950 text-stone-500 text-[11px] font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span>Copyright © 2026 兩岸民生觀測站. All Rights Reserved.</span>
          <span>{t('disclaimer').slice(0, 32)}...</span>
        </div>
      </div>
    </footer>
  );
};
