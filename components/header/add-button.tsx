"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { useCitiesStore } from "@/lib/store/use-cities-store";

export default function AddButton() {
  const searchParams = useSearchParams();
  const { addCity, isCitySaved, _hasHydrated } = useCitiesStore();

  if (!_hasHydrated) return null;

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const name = searchParams.get("location");
  const country = searchParams.get("country");

  const hasRequiredParams = Boolean(name && country && lat && lon);

  if (!hasRequiredParams) return null;

  const isSaved = hasRequiredParams ? isCitySaved(name!, country!) : false;

  const handleAdd = () => {
    if (!name || !country || !lat || !lon) return;
    addCity({
      name,
      country,
      coord: { lat: Number(lat), lon: Number(lon) },
      createdAt: Date.now(),
    });
  };

  return isSaved ? null : (
    <Button
      size="icon"
      variant={"outline"}
      aria-label="Add to Favorites"
      className="rounded-full"
      onClick={handleAdd}
    >
      <Plus />
    </Button>
  );
}
