/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, BookOpen, AlertCircle, X, ExternalLink } from 'lucide-react';

interface CopyrightNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopyrightNoticeModal: React.FC<CopyrightNoticeModalProps> = ({
  isOpen,
  onClose
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="copyright-modal-title"
        className="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          title={t('close')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-stone-200 dark:border-stone-800 pb-4 mb-5">
          <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 id="copyright-modal-title" className="text-lg md:text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">
              {t('copyrightTitle')}
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
              Copyright © 2026 兩岸民生觀測站 (Cross-Strait Livelihood Observatory)
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="space-y-5 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
          {/* Section 1: Copyright */}
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-600" />
              一、智慧財產權與數據版權
            </h4>
            <p>
              本站「兩岸民生觀測站」所有原創結構化專案分析、資料圖表設計、演算法推演與介面編排，均受中華民國著作權法、國際著作權條約及相關智慧財產權法規之保護。
            </p>
            <p className="text-xs bg-stone-100 dark:bg-stone-800/70 p-3 rounded-lg border border-stone-200 dark:border-stone-700">
              未經本站正式書面許可，禁止任何個人、機構或爬蟲機器人進行大規模資料抓取（Data Scraping）、商業重製、模型無端萃取或公開鏡像網站建置。
            </p>
          </div>

          {/* Section 2: Data Sources */}
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-emerald-600" />
              二、國際權威與官方公信資料庫來源
            </h4>
            <p>
              為維持最高學術客觀度與公信力，全站所有量化數據嚴格引用國際組織與兩岸官方公開資訊，包含：
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-stone-500 dark:text-stone-400 pl-1 font-mono">
              <li>國際貨幣基金組織 (IMF) World Economic Outlook 2026 購買力平價資料庫</li>
              <li>台灣行政院主計總處 (DGBAS) 受僱員工薪資調查與家庭收支調查報告 (2025/2026)</li>
              <li>中國大陸國家統計局 (NBS) 全國住戶收支與城鄉人口普查公報</li>
              <li>世界衛生組織 (WHO) 全球公衛統計與 Numbeo 全球醫療照護指數 (Health Care Index 2026)</li>
              <li>聯合國永續發展解決方案網絡 (SDSN) 全球幸福感報告 (World Happiness Report)</li>
              <li>SEMI 國際半導體產業協會與 TrendForce 集邦科技產業研究報告</li>
            </ul>
          </div>

          {/* Section 3: Fair Use & Citation */}
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              三、學術合理引用與免責聲明
            </h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-normal">
              非商業性學術引用或個人閱讀研究，請完整標註出處：「兩岸民生觀測站 (Cross-Strait Livelihood Observatory)」及相應官方引用來源。本站恪守事實查核與客觀經濟學研究精神，嚴禁任何人以任何形式竄改數據或進行泛政治化扭曲解讀。
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium text-xs hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm"
          >
            我已瞭解並同意遵守規範
          </button>
        </div>
      </div>
    </div>
  );
};
