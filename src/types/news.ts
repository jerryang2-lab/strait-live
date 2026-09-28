/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'zh-TW' | 'zh-CN' | 'en';

export type PillarCategory = 
  | 'ppp'
  | 'salary'
  | 'housing'
  | 'healthcare'
  | 'pension'
  | 'public_goods'
  | 'semiconductor'
  | 'culture_wellbeing';

export interface LocalizedString {
  'zh-TW': string;
  'zh-CN': string;
  en: string;
}

export interface LocalizedStringArray {
  'zh-TW': string[];
  'zh-CN': string[];
  en: string[];
}

export interface QuantitativeMetric {
  id: string;
  indicator: LocalizedString;
  taiwanValue: string;
  taiwanNumeric: number;
  taiwanUnit: LocalizedString;
  mainlandValue: string;
  mainlandNumeric: number;
  mainlandUnit: LocalizedString;
  ratioExplanation: LocalizedString;
  sourceAuthority: string;
  year: string;
  chartType: 'bar' | 'gauge' | 'distribution' | 'ratio';
}

export interface QuantitativeDataset {
  pillar: PillarCategory;
  title: LocalizedString;
  subtitle: LocalizedString;
  summary: LocalizedString;
  metrics: QuantitativeMetric[];
  distributionData?: {
    label: LocalizedString;
    taiwanPct: number;
    mainlandPct: number;
  }[];
  sources: string[];
}

export interface NewsArticle {
  id: string;
  pillar: PillarCategory;
  title: LocalizedString;
  kicker: LocalizedString;
  source: string;
  sourceAuthority: 'IMF' | 'WorldBank' | 'DGBAS' | 'NBS' | 'WHO' | 'Numbeo' | 'ThinkTank';
  publishedAt: string;
  readTimeMinutes: number;
  summary: LocalizedString;
  content: LocalizedStringArray;
  keyTakeaways: LocalizedStringArray;
  deepAnalysis: {
    context: LocalizedString;
    coreMechanism: LocalizedString;
    outlook2026: LocalizedString;
  };
  metrics?: QuantitativeMetric[];
  imageUrl: string;
  isFeatured?: boolean;
}

export interface DailyMorningBrief {
  date: string;
  headline: LocalizedString;
  overview: LocalizedString;
  bulletPoints: LocalizedStringArray;
  dataSpotlight: {
    title: LocalizedString;
    taiwan: string;
    mainland: string;
    verdict: LocalizedString;
  };
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  language: Language;
  fontSize: 'standard' | 'large' | 'xlarge';
  playbackSpeed: number;
  bookmarks: string[];
  offlineSavedIds: string[];
  readHistory: string[];
}
