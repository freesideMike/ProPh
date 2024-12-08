// types.ts
export interface IPhoto {
  id: number; // or number, depending on your database schema
  title: string;
  versions: [
    {
      sizeName: string;
      size: string;
      price: number;
    }
  ];
  times_opened: number;
  times_ordered: number;
  url: string;
  created_at: number;
  updated_at: number;
}
