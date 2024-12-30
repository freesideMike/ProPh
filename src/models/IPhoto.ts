export interface IPhoto {
  id: number;
  created_at: number;
  userId: string;
  photoId: string;
  title: string;
  format: string;
  priceRange: string;
  isActive: boolean;
}
