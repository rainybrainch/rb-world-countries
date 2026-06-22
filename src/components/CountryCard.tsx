import Link from 'next/link';
import { Country } from '@/data/countries';

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link href={`/countries/${country.id}`}>
      <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer h-full">
        <div className="text-5xl mb-4">{country.flag}</div>
        <h3 className="text-xl font-bold mb-2">{country.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{country.englishName}</p>
        <p className="text-gray-700 text-sm mb-4">{country.description}</p>
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
