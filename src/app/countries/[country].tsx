'use client';

import { getCountryById, countries } from '@/data/countries';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CountryPageProps {
  params: Promise<{ country: string }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country } = await params;
  const countryData = getCountryById(country);

  if (!countryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/countries" className="text-2xl font-bold text-gray-900">
            Country Academy
          </Link>
          <span className="text-gray-600 text-sm">Countries</span>
        </nav>
      </header>

      {/* Country Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-9xl">{countryData.flag}</div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">
                {countryData.name}
              </h1>
              <p className="text-2xl text-gray-600">{countryData.englishName}</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-6">{countryData.description}</p>
        </div>
      </section>

      {/* Country Info */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Basic Info */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">基本情報</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm">大陸</p>
                <p className="text-lg font-semibold text-gray-900">
                  {countryData.continent}
                </p>
              </div>
              {countryData.capital && (
                <div>
                  <p className="text-gray-600 text-sm">首都</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {countryData.capital}
                  </p>
                </div>
              )}
              {countryData.population && (
                <div>
                  <p className="text-gray-600 text-sm">人口</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {countryData.population}
                  </p>
                </div>
              )}
              {countryData.officialLanguage && (
                <div>
                  <p className="text-gray-600 text-sm">公式言語</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {countryData.officialLanguage.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">カテゴリ</h2>
            <div className="flex flex-wrap gap-3">
              {countryData.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Placeholder Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">政治</h2>
            <p className="text-gray-600">
              このセクションはまだ実装されていません。今後、{countryData.name}
              の政治体制、政府構造、主要な政治家についての情報が追加される予定です。
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">経済</h2>
            <p className="text-gray-600">
              このセクションはまだ実装されていません。今後、{countryData.name}
              の経済、主要産業、貿易についての情報が追加される予定です。
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">文化</h2>
          <p className="text-gray-600">
            このセクションはまだ実装されていません。今後、{countryData.name}
            の伝統、文化、芸術についての情報が追加される予定です。
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 flex gap-4">
          <Link
            href="/countries"
            className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            ← すべての国に戻る
          </Link>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return countries.map((country) => ({
    country: country.id,
  }));
}
