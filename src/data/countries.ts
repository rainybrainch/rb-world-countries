export interface EconomicData {
  gdpGrowthRates: Array<{ year: number; rate: number }>;
  inflation?: number;
  gdp?: string;
  population?: string;
  unemploymentRate?: number;
  debtToGdp?: number;
  summary?: string;
}

export interface Country {
  id: string;
  name: string;
  englishName: string;
  flag: string;
  image?: string;
  description: string;
  continent: string;
  population?: string;
  capital?: string;
  officialLanguage?: string[];
  categories: string[];
  economicData?: EconomicData;
}

export const countries: Country[] = [
  {
    id: 'india',
    name: 'インド',
    englishName: 'India',
    flag: '🇮🇳',
    image: '/images/countries/インド.jpg',
    description: 'South Asia largest democracy',
    continent: 'Asia',
    capital: 'New Delhi',
    population: '1.4B+',
    officialLanguage: ['Hindi', 'English'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'taiwan',
    name: '台湾',
    englishName: 'Taiwan',
    flag: '🇹🇼',
    image: '/images/countries/台湾.jpg',
    description: 'East Asian island nation',
    continent: 'Asia',
    capital: 'Taipei',
    population: '23.8M',
    officialLanguage: ['Mandarin', 'Taiwanese'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'china',
    name: '中国',
    englishName: 'China',
    flag: '🇨🇳',
    image: '/images/countries/中国.jpg',
    description: 'World\'s most populous country',
    continent: 'Asia',
    capital: 'Beijing',
    population: '1.4B+',
    officialLanguage: ['Mandarin'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'japan',
    name: '日本',
    englishName: 'Japan',
    flag: '🇯🇵',
    image: '/images/countries/日本.jpg',
    description: 'Island nation in East Asia',
    continent: 'Asia',
    capital: 'Tokyo',
    population: '125M',
    officialLanguage: ['Japanese'],
    categories: ['政治', '経済', '文化'],
    economicData: {
      gdpGrowthRates: [
        { year: 2021, rate: 2.1 },
        { year: 2022, rate: 1.8 },
        { year: 2023, rate: 1.9 },
        { year: 2024, rate: 1.2 },
        { year: 2025, rate: 0.6 },
      ],
      inflation: 1.5,
      gdp: '約550兆円',
      population: '1.23億人',
      unemploymentRate: 2.5,
      debtToGdp: 130.1,
      summary: '信用力・制度・産業基盤は強いが、人口減少・財政赤字・エネルギー依存が重い。短期破綻型ではないが、構造改革なしに高成長へ戻る見込みは薄い。',
    },
  },
  {
    id: 'germany',
    name: 'ドイツ',
    englishName: 'Germany',
    flag: '🇩🇪',
    image: '/images/countries/ドイツ.jpg',
    description: 'Central European nation',
    continent: 'Europe',
    capital: 'Berlin',
    population: '83M',
    officialLanguage: ['German'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'usa',
    name: 'アメリカ合衆国',
    englishName: 'United States',
    flag: '🇺🇸',
    image: '/images/countries/アメリカ.jpg',
    description: 'North American superpower',
    continent: 'North America',
    capital: 'Washington D.C.',
    population: '330M+',
    officialLanguage: ['English'],
    categories: ['政治', '経済', '文化'],
    economicData: {
      gdpGrowthRates: [
        { year: 2021, rate: 5.9 },
        { year: 2022, rate: 2.0 },
        { year: 2023, rate: 2.5 },
        { year: 2024, rate: 2.7 },
        { year: 2025, rate: 2.1 },
      ],
      inflation: 3.2,
      gdp: '30.76兆ドル',
      population: '3.43億人',
      unemploymentRate: 3.9,
      debtToGdp: 101,
      summary: '資本・技術・軍事・通貨・人材が全部強いチート寄りの国家。財政赤字と利払い費の増加が課題だが、基軸通貨地位と国債市場の深さが強み。',
    },
  },
  {
    id: 'uk',
    name: 'イギリス',
    englishName: 'United Kingdom',
    flag: '🇬🇧',
    image: '/images/countries/イギリス.jpg',
    description: 'Island nation in Western Europe',
    continent: 'Europe',
    capital: 'London',
    population: '67M',
    officialLanguage: ['English'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'france',
    name: 'フランス',
    englishName: 'France',
    flag: '🇫🇷',
    image: '/images/countries/フランス.jpg',
    description: 'Western European nation',
    continent: 'Europe',
    capital: 'Paris',
    population: '67M',
    officialLanguage: ['French'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'brazil',
    name: 'ブラジル',
    englishName: 'Brazil',
    flag: '🇧🇷',
    image: '/images/countries/ブラジル.jpg',
    description: 'South American nation',
    continent: 'South America',
    capital: 'Brasília',
    population: '215M',
    officialLanguage: ['Portuguese'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'indonesia',
    name: 'インドネシア',
    englishName: 'Indonesia',
    flag: '🇮🇩',
    image: '/images/countries/インドネシア.jpg',
    description: 'Southeast Asian archipelago',
    continent: 'Asia',
    capital: 'Jakarta',
    population: '275M',
    officialLanguage: ['Indonesian'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'mexico',
    name: 'メキシコ',
    englishName: 'Mexico',
    flag: '🇲🇽',
    image: '/images/countries/メキシコ.jpg',
    description: 'North American nation',
    continent: 'North America',
    capital: 'Mexico City',
    population: '128M',
    officialLanguage: ['Spanish'],
    categories: ['政治', '経済', '文化'],
  },
];

export function getCountryById(id: string): Country | undefined {
  return countries.find((c) => c.id === id);
}

export function getCountriesByContinent(continent: string): Country[] {
  return countries.filter((c) => c.continent === continent);
}
