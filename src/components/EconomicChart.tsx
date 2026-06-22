'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { EconomicData } from '@/data/countries';

interface EconomicChartProps {
  data: EconomicData;
  countryName: string;
}

export default function EconomicChart({ data, countryName }: EconomicChartProps) {
  if (!data.gdpGrowthRates || data.gdpGrowthRates.length === 0) {
    return (
      <div className="text-gray-600 text-center py-8">
        経済データが利用できません
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* GDP成長率推移 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">GDP成長率推移</h3>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.gdpGrowthRates}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                label={{ value: '年', position: 'insideBottomRight', offset: -5 }}
              />
              <YAxis
                label={{ value: 'GDP成長率 (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                formatter={(value) => `${value}%`}
                labelFormatter={(label) => `${label}年`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: '#2563eb', r: 4 }}
                activeDot={{ r: 6 }}
                name="GDP成長率"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 主要経済指標 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">主要経済指標</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.gdp && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">名目GDP</p>
              <p className="text-xl font-bold text-gray-900">{data.gdp}</p>
            </div>
          )}
          {data.population && (
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600">人口</p>
              <p className="text-xl font-bold text-gray-900">{data.population}</p>
            </div>
          )}
          {data.inflation !== undefined && (
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
              <p className="text-sm text-gray-600">インフレ率</p>
              <p className="text-xl font-bold text-gray-900">{data.inflation}%</p>
            </div>
          )}
          {data.unemploymentRate !== undefined && (
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
              <p className="text-sm text-gray-600">失業率</p>
              <p className="text-xl font-bold text-gray-900">{data.unemploymentRate}%</p>
            </div>
          )}
          {data.debtToGdp !== undefined && (
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
              <p className="text-sm text-gray-600">債務/GDP比</p>
              <p className="text-xl font-bold text-gray-900">{data.debtToGdp}%</p>
            </div>
          )}
        </div>
      </div>

      {/* 総合評価 */}
      {data.summary && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">総合評価</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
}
