import {
  MAX_SAVED_CITIES,
  SAVED_CITIES_STORAGE_KEY,
  SavedCity,
} from "@/types/city";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CitiesStore {
  _hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  cities: SavedCity[];
  addCity: (city: SavedCity) => void;
  removeCity: (name: string, country: string) => void;
  clearCities: () => void;
  isCitySaved: (name: string, country: string) => boolean;
  canAddCity: () => boolean;
}

export const useCitiesStore = create<CitiesStore>()(
  persist(
    (set, get) => ({
      _hasHydrated: false,
      setHasHydrated: (value) => set({ _hasHydrated: value }),
      cities: [],
      addCity: (city) => {
        const currentCities = get().cities;

        const isDuplicate = currentCities.some(
          (c) =>
            c.name.toLocaleLowerCase() === city.name.toLocaleLowerCase() &&
            c.country.toLocaleLowerCase() === city.country.toLocaleLowerCase(),
        );

        if (isDuplicate) {
          console.warn("City already exists");
          return;
        }

        if (currentCities.length >= MAX_SAVED_CITIES) {
          console.warn("You can only save up to 10 cities");
          return;
        }

        const cityToAdd = {
          ...city,
          createdAt: city.createdAt || Date.now(),
        };

        set({ cities: [...currentCities, cityToAdd] });
      },

      removeCity: (name, country) => {
        set((state) => ({
          cities: state.cities.filter(
            (c) =>
              !(
                c.name.toLocaleLowerCase() === name.toLocaleLowerCase() &&
                c.country.toLowerCase() === country.toLocaleLowerCase()
              ),
          ),
        }));
      },

      clearCities: () => set({ cities: [] }),

      isCitySaved: (name, country) => {
        const cities = get().cities;
        return cities.some(
          (c) =>
            c.name.toLocaleLowerCase() === name.toLocaleLowerCase() &&
            c.country.toLocaleLowerCase() === country.toLocaleLowerCase(),
        );
      },

      canAddCity: () => {
        return get().cities.length < MAX_SAVED_CITIES;
      },
    }),
    {
      name: SAVED_CITIES_STORAGE_KEY,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
