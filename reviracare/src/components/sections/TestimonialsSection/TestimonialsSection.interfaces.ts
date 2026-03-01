export interface ITestimonialItem {
  id: string;
  reviewerName: string;
  avatarLetter: string;
  avatarColorClass: string;
  timeAgo: string;
  rating: number;
  snippet: string;
  readMoreHref?: string;
  hasProfileImage?: boolean;
  profileImageSrc?: string;
}

export interface ITestimonialsSectionProps {
  totalReviews?: number;
  summaryLabel?: string;
  testimonials?: ITestimonialItem[];
}
