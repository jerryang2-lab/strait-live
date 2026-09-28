/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export const SecurityShield: React.FC = () => {
  const { t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'warning' | 'success'>('warning');

  useEffect(() => {
    // Intercept right click (context menu)
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click on input and textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
      setToastType('warning');
      setToastMessage(t('copyrightProtectedToast'));
      setTimeout(() => setToastMessage(null), 3500);
    };

    // Intercept copy event to append citation attribution
    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const selectedText = selection.toString().trim();
      if (selectedText.length < 5) return;

      const citation = `\n\n[本文摘錄自 兩岸民生觀測站 (Cross-Strait Livelihood Observatory) · 數據依據 IMF / 兩岸官方統計 (2026) · 版權所有，引用請註明出處]`;
      const fullText = selectedText + citation;

      if (e.clipboardData) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', fullText);
        setToastType('success');
        setToastMessage(t('copySuccessToast'));
        setTimeout(() => setToastMessage(null), 3000);
      }
    };

    // Prevent dragging images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, [t]);

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm pointer-events-none animate-slide-in">
      <div className={`flex items-start gap-2.5 p-3.5 rounded-xl shadow-xl text-xs backdrop-blur-md border ${
        toastType === 'warning'
          ? 'bg-amber-950/90 text-amber-200 border-amber-800/80 shadow-amber-950/20'
          : 'bg-emerald-950/90 text-emerald-200 border-emerald-800/80 shadow-emerald-950/20'
      }`}>
        {toastType === 'warning' ? (
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        ) : (
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        )}
        <div className="leading-relaxed">
          {toastMessage}
        </div>
      </div>
    </div>
  );
};
