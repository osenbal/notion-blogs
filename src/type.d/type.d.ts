export interface TagPost {
  id: string;
  name: string;
}

export interface CategoryPost {
  id: string;
  name: string;
}

interface URL {
  url: string;
}

export interface Post {
  id: string;
  categories: Array | null;
  tags: Array | null;
  createdAt: string;
  createdBy: Array;
  deletedAt: string | null;
  featuredImage: URL | null;
  isArchived: boolean;
  title: string;
  description: string | null;
}
