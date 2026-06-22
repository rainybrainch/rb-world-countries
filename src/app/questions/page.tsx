import type { Metadata } from 'next';
import QuestionsClient from './QuestionsClient';

export const metadata: Metadata = {
  title: 'よくある質問 | ALL ACADEMY',
  description: 'ALL ACADEMYのよくある質問。言語学習の進め方・進捗保存・実績・メモ・シェア機能について解説します。',
};

export default function QuestionsPage() {
  return <QuestionsClient />;
}
