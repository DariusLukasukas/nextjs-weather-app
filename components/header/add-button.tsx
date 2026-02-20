"use client";

import { Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { useCitiesStore } from "@/lib/store/use-cities-store";
import { cn } from "@/lib/utils";

export default function AddButton() {
  const searchParams = useSearchParams();
  const { addCity, isCitySaved, removeCity, _hasHydrated } = useCitiesStore();

  if (!_hasHydrated) return null;

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const name = searchParams.get("location");
  const country = searchParams.get("country");

  const hasRequiredParams = Boolean(name && country && lat && lon);

  if (!hasRequiredParams) return null;

  const isSaved = hasRequiredParams ? isCitySaved(name!, country!) : false;

  const handleToggle = () => {
    if (!name || !country || !lat || !lon) return;

    if (isSaved) {
      removeCity(name, country);
    } else {
      addCity({
        name,
        country,
        coord: { lat: Number(lat), lon: Number(lon) },
        createdAt: Date.now(),
      });
    }
  };

  return (
    <Button
      size="icon"
      variant={isSaved ? "destructive" : "secondary"}
      onClick={handleToggle}
      disabled={!_hasHydrated}
      aria-label={
        isSaved ? "Remove city from saved cities" : "Add city to saved cities"
      }
      className={cn("rounded-full", !isSaved && "bg-card")}
    >
      {isSaved ? <Trash2 /> : <Plus />}
    </Button>
  );
}
