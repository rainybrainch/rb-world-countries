import type { Metadata } from 'next';
import ProgressClient from './ProgressClient';

export const metadata: Metadata = {
  title: '学習レポート | ALL ACADEMY',
  description: '言語学習進捗・連続学習日数・実績バッジ・メモなど、あなたの学習記録を確認できます。',
};

export default function ProgressPage() {
  return <ProgressClient />;
}
