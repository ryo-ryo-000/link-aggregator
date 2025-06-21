import ProfileHeader from '@/components/ProfileHeader';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/data/videos';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <ProfileHeader />
        
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            ポートフォリオ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}