export interface ILatestNewsPost {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  readTimeMinutes: number;
  date: string;
}

export interface ILatestNewsSectionProps {
  id?: string;
  title?: string;
  label?: string;
  showViewAll?: boolean;
  limit?: number;
}
