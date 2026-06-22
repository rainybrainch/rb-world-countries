export interface Country {
  id: string;
  name: string;
  englishName: string;
  flag: string;
  description: string;
  continent: string;
  population?: string;
  capital?: string;
  officialLanguage?: string[];
  categories: string[];
}

export const countries: Country[] = [
  {
    id: 'india',
    name: 'インド',
    englishName: 'India',
    flag: '🇮🇳',
    description: 'South Asia largest democracy',
    continent: 'Asia',
    capital: 'New Delhi',
    population: '1.4B+',
    officialLanguage: ['Hindi', 'English'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'china',
    name: '中国',
    englishName: 'China',
    flag: '🇨🇳',
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
    description: 'Island nation in East Asia',
    continent: 'Asia',
    capital: 'Tokyo',
    population: '125M',
    officialLanguage: ['Japanese'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'germany',
    name: 'ドイツ',
    englishName: 'Germany',
    flag: '🇩🇪',
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
    description: 'North American superpower',
    continent: 'North America',
    capital: 'Washington D.C.',
    population: '330M+',
    officialLanguage: ['English'],
    categories: ['政治', '経済', '文化'],
  },
  {
    id: 'uk',
    name: 'イギリス',
    englishName: 'United Kingdom',
    flag: '🇬🇧',
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
