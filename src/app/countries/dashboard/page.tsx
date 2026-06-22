'use client';

import { countries } from '@/data/countries';
import Link from 'next/link';
import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from 'recharts';

export default function CountriesDashboard() {
  const [selectedMetric, setSelectedMetric] = useState<'gdp' | 'inflation' | 'unemployment' | 'debt'>('gdp');
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);

  // 経済データがある国のみフィルタ
  const countriesWithData = countries.filter((c) => c.economicData?.gdpGrowthRates?.length);

  const continents = Array.from(new Set(countriesWithData.map((c) => c.continent)));
  const filteredCountries = selectedContinent
    ? countriesWithData.filter((c) => c.continent === selectedContinent)
    : countriesWithData;

  // 最新GDP成長率用データ
  const gdpChartData = filteredCountries
    .map((country) => ({
      name: country.name,
      flag: country.flag,
      value: country.economicData?.gdpGrowthRates?.[country.economicData.gdpGrowthRates.length - 1]?.rate ?? 0,
      id: country.id,
    }))
    .sort((a, b) => b.value - a.value);

  // インフレ率用データ
  const inflationChartData = filteredCountries
    .filter((c) => c.economicData?.inflation !== undefined)
    .map((country) => ({
      name: country.name,
      flag: country.flag,
      value: country.economicData!.inflation!,
      id: country.id,
    }))
    .sort((a, b) => b.value - a.value);

  // 失業率用データ
  const unemploymentChartData = filteredCountries
    .filter((c) => c.economicData?.unemploymentRate !== undefined)
    .map((country) => ({
      name: country.name,
      flag: country.flag,
      value: country.economicData!.unemploymentRate!,
      id: country.id,
    }))
    .sort((a, b) => b.value - a.value);

  // 債務比率用データ
  const debtChartData = filteredCountries
    .filter((c) => c.economicData?.debtToGdp !== undefined)
    .map((country) => ({
      name: country.name,
      flag: country.flag,
      value: country.economicData!.debtToGdp!,
      id: country.id,
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/countries" className="text-2xl font-bold text-gray-900">
            Country Academy
          </Link>
          <span className="text-gray-600 text-sm">国家経済比較ダッシュボード</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">世界24か国 経済指標比較</h1>
          <p className="text-lg text-gray-600">
            スプレッドシート「カウントリーレポート」ベースの経済指標をビジュアル比較
          </p>
          <p className="text-sm text-gray-500 mt-2">2026年6月22日データ</p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Metric Selector */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">指標を選択</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'gdp', label: '📊 GDP成長率' },
                { key: 'inflation', label: '💹 インフレ率' },
                { key: 'unemployment', label: '💼 失業率' },
                { key: 'debt', label: '📉 債務比率' },
              ].map((metric) => (
                <button
                  key={metric.key}
                  onClick={() => setSelectedMetric(metric.key as any)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    selectedMetric === metric.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  {metric.label}
                </button>
              ))}
            </div>
          </div>

          {/* Continent Filter */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">大陸でフィルタ</h2>
            <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedMetric === 'gdp' && '📊 GDP成長率推移 (2025年)'}
            {selectedMetric === 'inflation' && '💹 インフレ率比較'}
            {selectedMetric === 'unemployment' && '💼 失業率比較'}
            {selectedMetric === 'debt' && '📉 債務/GDP比率'}
          </h2>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={
                selectedMetric === 'gdp'
                  ? gdpChartData
                  : selectedMetric === 'inflation'
                    ? inflationChartData
                    : selectedMetric === 'unemployment'
                      ? unemploymentChartData
                      : debtChartData
              }
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip
                formatter={(value) => `${value}%`}
                labelFormatter={(label) => `${label}`}
              />
              <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Country List */}
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">対象国一覧 ({filteredCountries.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCountries.map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.id}`}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <p className="font-bold text-gray-900">{country.name}</p>
                    <p className="text-xs text-gray-500">{country.continent}</p>
                  </div>
                </div>
                {country.economicData && (
                  <div className="text-sm space-y-1 pt-2 border-t border-gray-200">
                    {country.economicData.gdpGrowthRates?.[country.economicData.gdpGrowthRates.length - 1] && (
                      <p className="text-gray-700">
                        GDP: <span className="font-bold">{country.economicData.gdpGrowthRates[country.economicData.gdpGrowthRates.length - 1].rate}%</span>
                      </p>
                    )}
                    {country.economicData.inflation !== undefined && (
                      <p className="text-gray-700">
                        CPI: <span className="font-bold">{country.economicData.inflation}%</span>
                      </p>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-lg font-bold text-blue-900 mb-3">ℹ️ このダッシュボードについて</h2>
          <p className="text-blue-800 mb-3">
            このページは、Google Sheets「カウントリーレポート」に基づき、24か国の経済指標を視覚的に比較するためのダッシュボードです。
          </p>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>2021〜2025年のGDP成長率推移</li>
            <li>インフレ率、失業率、債務/GDP比率など主要指標</li>
            <li>大陸別フィルタで地域分析が可能</li>
            <li>各国をクリックすると詳細ページへ移動</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
