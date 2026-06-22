'use client';

import { countries } from '@/data/countries';
import CountryCard from '@/components/CountryCard';
import Link from 'next/link';
import { useState } from 'react';

export default function CountriesPage() {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);

  const continents = Array.from(new Set(countries.map((c) => c.continent)));
  const filteredCountries = selectedContinent
    ? countries.filter((c) => c.continent === selectedContinent)
    : countries;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Country Academy
          </Link>
          <span className="text-gray-600 text-sm">Countries</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Country Academy
          </h1>
          <p className="text-xl text-gray-600">
            世界の国々を政治、経済、文化の視点から学ぶ
          </p>
          <p className="text-gray-500 mt-2">
            {countries.length}ヶ国のプロフィール（順次追加中）
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">大陸で絞り込み</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedContinent(null)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              selectedContinent === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            すべて
          </button>
          {continents.map((continent) => (
            <button
              key={continent}
              onClick={() => setSelectedContinent(continent)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedContinent === continent
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {continent}
            </button>
          ))}
        </div>
      </section>

      {/* Countries Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              このフィルター条件に該当する国がありません。
            </p>
          </div>
        )}
      </section>

      {/* Info */}
      <section className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">このアプリについて</h2>
          <p className="text-gray-700 mb-4">
            Country
            Academyは、言語学習者のために世界の国々を体系的に学べるプラットフォームです。
          </p>
          <p className="text-gray-700 mb-4">
            各国のプロフィールは、政治体制、経済状況、文化的特徴といった複数の視点から構成されています。
          </p>
          <p className="text-gray-700">
            Language Academy（言語コース）と組み合わせることで、より深い文化的理解を促進します。
          </p>
        </div>
      </section>
    </main>
  );
}
