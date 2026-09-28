/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Language } from '../types/news';

export interface SpeechReaderState {
  isPlaying: boolean;
  isPaused: boolean;
  currentArticleId: string | null;
  currentArticleTitle: string;
  currentParagraphIndex: number;
  totalParagraphs: number;
  playbackSpeed: number;
  isSupported: boolean;
}

export function useSpeechReader(currentLanguage: Language) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null);
  const [currentArticleTitle, setCurrentArticleTitle] = useState('');
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [totalParagraphs, setTotalParagraphs] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isSupported, setIsSupported] = useState(true);

  const paragraphsRef = useRef<string[]>([]);
  const articleIdRef = useRef<string | null>(null);
  const currentIndexRef = useRef(0);
  const isCancelledRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setIsSupported(false);
    }
  }, []);

  const stop = useCallback(() => {
    isCancelledRef.current = true;
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentParagraphIndex(0);
  }, []);

  const speakParagraph = useCallback((index: number) => {
    if (
      typeof window === 'undefined' ||
      !window.speechSynthesis ||
      isCancelledRef.current ||
      index >= paragraphsRef.current.length
    ) {
      setIsPlaying(false);
      setIsPaused(false);
      return;
    }

    currentIndexRef.current = index;
    setCurrentParagraphIndex(index);

    const text = paragraphsRef.current[index];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = playbackSpeed;

    // Select suitable voice
    const voices = window.speechSynthesis.getVoices();
    let targetLang = 'zh-TW';
    if (currentLanguage === 'zh-CN') targetLang = 'zh-CN';
    if (currentLanguage === 'en') targetLang = 'en-US';

    const matchedVoice = voices.find(v => v.lang.replace('_', '-').startsWith(targetLang.slice(0, 2)));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }
    utterance.lang = targetLang;

    utterance.onend = () => {
      if (!isCancelledRef.current) {
        if (index + 1 < paragraphsRef.current.length) {
          speakParagraph(index + 1);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
          setCurrentParagraphIndex(0);
        }
      }
    };

    utterance.onerror = () => {
      if (!isCancelledRef.current) {
        setIsPlaying(false);
        setIsPaused(false);
      }
    };

    window.speechSynthesis.speak(utterance);
  }, [playbackSpeed, currentLanguage]);

  const playArticle = useCallback((id: string, title: string, paragraphs: string[]) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    isCancelledRef.current = false;
    paragraphsRef.current = [title, ...paragraphs];
    articleIdRef.current = id;
    setCurrentArticleId(id);
    setCurrentArticleTitle(title);
    setTotalParagraphs(paragraphsRef.current.length);
    setIsPlaying(true);
    setIsPaused(false);

    speakParagraph(0);
  }, [speakParagraph]);

  const pause = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, []);

  const changeSpeed = useCallback((speed: number) => {
    setPlaybackSpeed(speed);
    // Restart current paragraph with new speed if actively playing
    if (isPlaying && !isPaused && articleIdRef.current) {
      window.speechSynthesis.cancel();
      speakParagraph(currentIndexRef.current);
    }
  }, [isPlaying, isPaused, speakParagraph]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isPlaying,
    isPaused,
    currentArticleId,
    currentArticleTitle,
    currentParagraphIndex,
    totalParagraphs,
    playbackSpeed,
    isSupported,
    playArticle,
    pause,
    resume,
    stop,
    changeSpeed
  };
}
