import Link from 'next/link';
import Image from 'next/image';
import { Country } from '@/data/countries';

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link href={`/countries/${country.id}`}>
      <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer h-full overflow-hidden">
        {country.image ? (
          <div className="relative w-full h-40 mb-4 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ) : (
          <div className="text-5xl mb-4">{country.flag}</div>
        )}
        <h3 className="text-xl font-bold mb-2">{country.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{country.englishName}</p>
        <p className="text-gray-700 text-sm mb-4">{country.description}</p>

        {/* Economic Summary */}
        {country.economicData?.gdpGrowthRates && country.economicData.gdpGrowthRates.length > 0 && (
          <div className="mb-4 p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <p className="text-xs text-gray-600 font-semibold mb-2">最新経済指標</p>
            <div className="text-sm space-y-1">
              {country.economicData.gdpGrowthRates[country.economicData.gdpGrowthRates.length - 1] && (
                <p className="text-gray-800">
                  📊 GDP成長率: <span className="font-bold">{country.economicData.gdpGrowthRates[country.economicData.gdpGrowthRates.length - 1].rate}%</span>
                </p>
              )}
              {country.economicData.inflation !== undefined && (
                <p className="text-gray-800">
                  💹 インフレ: <span className="font-bold">{country.economicData.inflation}%</span>
                </p>
              )}
              {country.economicData.unemploymentRate !== undefined && (
                <p className="text-gray-800">
                  💼 失業率: <span className="font-bold">{country.economicData.unemploymentRate}%</span>
                </p>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {country.categories.map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
          {country.continent} • {country.capital}
        </div>
      </div>
    </Link>
  );
}
