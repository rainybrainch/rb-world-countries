'use client';

import Link from 'next/link';
import { countries } from '@/data/countries';
import CountryCard from '@/components/CountryCard';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Country Academy</h1>
          <Link
            href="/countries"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            国一覧を見る
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Country Academy へようこそ</h2>
          <p className="text-xl opacity-90 mb-8">
            世界の国々を政治、経済、文化の視点から学べるプラットフォーム
          </p>
          <Link
            href="/countries"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            探索を始める
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            このアプリについて
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {countries.length} ヶ国のプロフィール
              </h4>
              <p className="text-gray-600">
                アジア、ヨーロッパ、アメリカ大陸を代表する国々が実装済み
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                3つの視点
              </h4>
              <p className="text-gray-600">
                政治体制、経済状況、文化的特徴から各国を学ぶ
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🗣️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                言語学習と連携
              </h4>
              <p className="text-gray-600">
                Language Academy との組み合わせで深い理解へ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Countries */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            注目の国
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {countries.slice(0, 6).map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/countries"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              すべての国を見る → {countries.length} ヶ国
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            開発ロードマップ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                Phase 1: 基本枠組み（進行中）
              </h4>
              <ul className="space-y-2 text-blue-800">
                <li>✓ 国データスキーマ構築</li>
                <li>✓ 国別プロフィールページテンプレート</li>
                <li>✓ 国カード表示コンポーネント</li>
                <li>✓ 国一覧ページ＆フィルター機能</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Phase 2〜5: コンテンツ充実（予定）
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>・政治セクション実装（政府体制、歴史）</li>
                <li>・経済セクション実装（産業、貿易）</li>
                <li>・文化セクション実装（言語、伝統）</li>
                <li>・対応国の追加（全10国→50国以上）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">さあ、世界を探索しましょう</h3>
          <p className="text-xl opacity-90 mb-8">
            Country Academy で、世界中の国々について学び、異文化への理解を深めます
          </p>
          <Link
            href="/countries"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            今すぐ始める
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">
            Country Academy — Language Academy との連携で、言語と文化を同時に学ぶ
          </p>
          <p className="text-sm">
            Part of{' '}
            <span className="text-white font-semibold">All Academy Hub</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
