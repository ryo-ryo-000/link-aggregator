export interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  category: string;
  createdAt: Date;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  fileName?: string;
  youtubeUrl?: string;
  thumbnail?: string;
  duration?: string;
  uploadedAt: Date;
  tags?: string[];
}