import type { Genre, TopicCategory } from '@/types';

export const genres: Genre[] = [
  {
    id: 'g-language',
    title: 'Language Learning',
    description: 'Learn 11 languages to connect with the world.',
  },
];

export const topicCategories: TopicCategory[] = [
  {
    id: 'topic-english',
    title: 'English',
    name: 'English',
    icon: 'genre-english',
    description: 'English language learning at A1, A2, and B1 levels.',
    image: '/images/categories/english.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-japanese',
    title: '日本語',
    name: '日本語',
    icon: 'genre-japanese-modern',
    description: 'Japanese language learning at A1, A2, and B1 levels.',
    image: '/images/categories/japanese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-chinese',
    title: '中国語',
    name: '中国語',
    icon: 'genre-chinese',
    description: 'Chinese language learning at A1, A2, and B1 levels.',
    image: '/images/categories/chinese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-korean',
    title: '한국어',
    name: '한국어',
    icon: 'genre-korean',
    description: 'Korean language learning at A1, A2, and B1 levels.',
    image: '/images/categories/korean.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-german',
    title: 'Deutsch',
    name: 'Deutsch',
    icon: 'genre-german',
    description: 'German language learning at A1, A2, and B1 levels.',
    image: '/images/categories/german.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-french',
    title: 'Français',
    name: 'Français',
    icon: 'genre-french',
    description: 'French language learning at A1, A2, and B1 levels.',
    image: '/images/categories/french.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-spanish',
    title: 'Español',
    name: 'Español',
    icon: 'genre-spanish',
    description: 'Spanish language learning at A1, A2, and B1 levels.',
    image: '/images/categories/spanish.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-italian',
    title: 'Italiano',
    name: 'Italiano',
    icon: 'genre-italian',
    description: 'Italian language learning at A1, A2, and B1 levels.',
    image: '/images/categories/italian.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-arabic',
    title: 'العربية',
    name: 'العربية',
    icon: 'genre-arabic',
    description: 'Arabic language learning at A1, A2, and B1 levels.',
    image: '/images/categories/arabic.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-portuguese',
    title: 'Português',
    name: 'Português',
    icon: 'genre-portuguese',
    description: 'Portuguese language learning at A1, A2, and B1 levels.',
    image: '/images/categories/portuguese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-classical-chinese',
    title: '古文・漢文',
    name: '古文・漢文',
    icon: 'genre-classical',
    description: 'Classical Chinese language learning.',
    image: '/images/categories/classical-chinese.webp',
    genreId: 'g-language',
  },
];

export function getGenreById(id: string): Genre | undefined {
  return genres.find(g => g.id === id);
}

export function getCategoriesByGenre(genreId: string): TopicCategory[] {
  return topicCategories.filter(c => c.genreId === genreId);
}

export function getTopicCategoryById(id: string): TopicCategory | undefined {
  return topicCategories.find(c => c.id === id);
}
