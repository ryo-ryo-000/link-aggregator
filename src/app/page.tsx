import { categories, links } from '@/data/links';
import CategorySection from '@/components/CategorySection';
import ProfileHeader from '@/components/ProfileHeader';

export default function Home() {
  return (
    <div className="w-full max-w-2xl mx-auto px-5 py-10">
      <ProfileHeader />
      
      <main>
        {categories.map(category => {
          const categoryLinks = links.filter(link => link.category === category.slug);
          return (
            <CategorySection
              key={category.id}
              category={category}
              links={categoryLinks}
            />
          );
        })}
      </main>

      <footer className="text-center mt-16 pb-5">
        <p className="text-xs" style={{ color: '#b0b0b0' }}>
          最後まで見てくれてありがとう！
        </p>
      </footer>
    </div>
  );
}