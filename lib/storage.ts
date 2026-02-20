import { SAVED_CITIES_STORAGE_KEY, SavedCity } from "@/types/city";

export function getSavedCities(): SavedCity[] {
  try {
    const raw = localStorage.getItem(SAVED_CITIES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function setSavedCities(cities: SavedCity[]): void {
  localStorage.setItem(SAVED_CITIES_STORAGE_KEY, JSON.stringify(cities));
}

export function addSavedCity(city: SavedCity): SavedCity[] {
  const current = getSavedCities();

  // Check if city already exists by name + country
  const isDuplicate = current.some(
    (c) =>
      c.name.toLocaleLowerCase() === city.name.toLocaleLowerCase() &&
      c.country.toLocaleLowerCase() === city.country.toLocaleLowerCase(),
  );

  if (isDuplicate) return current;

  const cityToAdd: SavedCity = {
    ...city,
    createdAt: city.createdAt || Date.now(),
  };

  const next = [...current, cityToAdd];

  setSavedCities(next);
  return next;
}

export function removeSavedCity(name: string, coutry: string): SavedCity[] {
  const current = getSavedCities();

  // Filter out city with matching name + country
  const next = current.filter(
    (c) =>
      !(
        c.name.toLocaleLowerCase() === name.toLocaleLowerCase() &&
        c.country.toLocaleLowerCase() === coutry.toLocaleLowerCase()
      ),
  );

  setSavedCities(next);
  return next;
}
