import { Category, Link } from '@/types/link';
import LinkCard from './LinkCard';

interface CategorySectionProps {
  category: Category;
  links: Link[];
}

export default function CategorySection({ category, links }: CategorySectionProps) {
  if (links.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 
        className="text-sm mb-5 pl-2"
        style={{ 
          fontFamily: 'var(--font-mplus-rounded)',
          fontWeight: 700,
          color: 'var(--accent-color)',
          textTransform: 'uppercase',
          letterSpacing: '1.5px'
        }}
      >
        {category.name}
      </h2>
      <div className="grid gap-4">
        {links.map(link => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}