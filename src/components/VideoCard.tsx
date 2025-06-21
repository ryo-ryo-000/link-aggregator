import { Video } from '@/types/link';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  // YouTubeのURLからIDを抽出
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = video.youtubeUrl ? getYouTubeId(video.youtubeUrl) : null;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-video relative bg-gray-100 dark:bg-gray-700">
        {video.youtubeUrl && youtubeId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : video.fileName ? (
          <video 
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            <source src={`/videos/${video.fileName}`} type="video/mp4" />
            お使いのブラウザは動画タグをサポートしていません。
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            動画が利用できません
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {video.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {video.description}
        </p>
        
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {video.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          {video.uploadedAt.toLocaleDateString('ja-JP')}
        </div>
      </div>
    </div>
  );
}