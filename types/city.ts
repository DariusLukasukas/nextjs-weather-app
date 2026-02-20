export const SAVED_CITIES_STORAGE_KEY = "SAVED_CITIES";

export interface SavedCity {
  name: string;
  country: string;
  coord: { lat: number; lon: number };
  createdAt: number;
  order?: number;
}
