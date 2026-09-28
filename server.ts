/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { initialNewsArticles, quantitativeDatasets, defaultMorningBrief } from './src/data/authoritativeData';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Initialize Gemini API client if key is available
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      ai = new GoogleGenAI();
    } catch (e) {
      console.warn('Gemini API client initialization failed, will use structured fallback data:', e);
    }
  }

  // API 1: Fetch Articles and Quantitative Datasets
  app.get('/api/news', (req, res) => {
    res.json({
      success: true,
      articles: initialNewsArticles,
      datasets: quantitativeDatasets,
      morningBrief: defaultMorningBrief,
      lastUpdated: new Date().toISOString()
    });
  });

  // API 2: Refresh Daily Data
  app.post('/api/news/refresh', (req, res) => {
    const updatedArticles = initialNewsArticles.map(article => ({
      ...article,
      publishedAt: new Date().toISOString()
    }));

    res.json({
      success: true,
      articles: updatedArticles,
      morningBrief: {
        ...defaultMorningBrief,
        date: new Date().toISOString().slice(0, 10)
      },
      lastUpdated: new Date().toISOString()
    });
  });

  // API 3: Gemini Morning Briefing Generation
  app.post('/api/gemini/morning-brief', async (req, res) => {
    const { lang = 'zh-TW' } = req.body;

    if (!ai || !process.env.GEMINI_API_KEY) {
      // Graceful fallback to authoritative default brief
      return res.json({
        success: true,
        source: 'authoritative_fallback',
        brief: defaultMorningBrief
      });
    }

    try {
      const prompt = `你是一位客觀、嚴謹的國際宏觀經濟與兩岸民生研究機構首席分析師。
請根據 2026 年最新公信數據（IMF 購買力平價、台灣主計總處、大陸國家統計局、WHO 醫療指數）：
1. 台灣人均 PPP GDP 98,051 美元（全球第 8）；大陸總體 GDP PPP 44.3 兆美元（全球第 1），人均 31,596 美元。
2. 薪資中位數：台灣約 NT$42,000（PPP $3,150）；大陸全體中位數折合約 NT$18,500，一線城市中位數約 NT$40,000。
3. 住房屋齡：台灣平均屋齡 34-35 年（雙北老屋逾 72%）；大陸城鎮屋齡 20-23 年。
4. 醫療照護：台灣醫療指數 87.1 分（全球第 1）；大陸推動集採降價，但三甲醫院自費目錄仍存。

請恪守中立客觀、實事求是的原則，嚴禁任何煽動性或泛政治立場詞彙，以繁體中文生成簡要的今日晨報綜覽（約 150 字），並附上 3 點客觀量化重點。`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt
      });

      const responseText = response.text || '';
      return res.json({
        success: true,
        source: 'gemini_live',
        generatedText: responseText,
        brief: defaultMorningBrief
      });
    } catch (err: any) {
      console.error('Gemini API call failed:', err);
      return res.json({
        success: true,
        source: 'authoritative_fallback',
        brief: defaultMorningBrief,
        error: err.message
      });
    }
  });

  // API 4: Gemini Deep Analysis for specific topic
  app.post('/api/gemini/analyze', async (req, res) => {
    const { topic, pillar } = req.body;

    if (!ai || !process.env.GEMINI_API_KEY) {
      const match = initialNewsArticles.find(a => a.pillar === pillar) || initialNewsArticles[0];
      return res.json({
        success: true,
        source: 'fallback',
        analysis: match.deepAnalysis
      });
    }

    try {
      const prompt = `針對「兩岸民生比較：${topic || pillar}」主題，請以國際公信數據（IMF、世衛、兩岸官方統計）為準繩，客觀拆解：
1. 背景成因（50字）
2. 核心機制（50字）
3. 未來5年展望（50字）
請以客觀中立學術筆調，嚴禁泛政治化情緒語言。`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt
      });

      return res.json({
        success: true,
        source: 'gemini_live',
        analysisText: response.text
      });
    } catch (err: any) {
      console.error('Gemini analyze failed:', err);
      const match = initialNewsArticles.find(a => a.pillar === pillar) || initialNewsArticles[0];
      return res.json({
        success: true,
        source: 'fallback',
        analysis: match.deepAnalysis
      });
    }
  });

  // Mount Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on http://0.0.0.0:${PORT}`);
  });
}

startServer();
