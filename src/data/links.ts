import { Link, Category } from '@/types/link';

export const categories: Category[] = [
  {
    id: '1',
    name: 'SNS',
    slug: 'sns',
    description: 'ソーシャルメディア',
  },
  {
    id: '2',
    name: 'BLOG',
    slug: 'blog',
    description: '記事・エッセイ',
  },
  {
    id: '3',
    name: 'PORTFOLIO',
    slug: 'portfolio',
    description: '作品集',
  }
];

export const links: Link[] = [
  {
    id: '1',
    title: 'X (旧Twitter)',
    description: '日々のつぶやきや最新情報はこちらから',
    url: 'https://x.com/cryptoninjanime',
    category: 'sns',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'note',
    description: '考えていることや好きなことを長文で綴っています',
    url: 'https://note.com/cryptoninjanime',
    category: 'blog',
    createdAt: new Date('2024-01-14'),
  },
  {
    id: '3',
    title: 'ポートフォリオ',
    description: 'これまでの作品をまとめています',
    url: '/portfolio',
    category: 'portfolio',
    createdAt: new Date('2024-01-13'),
  }
];

export function getLinksByCategory(categorySlug: string): Link[] {
  return links.filter(link => link.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}