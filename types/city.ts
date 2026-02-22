export const SAVED_CITIES_STORAGE_KEY = "SAVED_CITIES";
export const MAX_SAVED_CITIES = 5;

export interface SavedCity {
  name: string;
  country: string;
  coord: { lat: number; lon: number };
  createdAt: number;
  order?: number;
}
