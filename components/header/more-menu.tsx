"use client";

import { Ellipsis, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useSearchParams } from "next/navigation";
import { useCitiesStore } from "@/lib/store/use-cities-store";

export default function MoreMenu() {
  const searchParams = useSearchParams();
  const { removeCity, isCitySaved } = useCitiesStore();

  const name = searchParams.get("location");
  const country = searchParams.get("country");

  const hasLocation = Boolean(name && country);
  const isSaved = hasLocation ? isCitySaved(name!, country!) : false;

  const handleDelete = () => {
    if (!name || !country) return;
    removeCity(name, country);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size={"icon"} variant={"outline"} className="rounded-full">
            <Ellipsis />
          </Button>
        }
      />
      <DropdownMenuContent className="w-full max-w-fit">
        <DropdownMenuItem>About</DropdownMenuItem>
        {isSaved && (
          <>
            <DropdownMenuSeparator className="mx-1" />
            <DropdownMenuItem variant="destructive" onClick={handleDelete}>
              <Trash2 />
              Delete from Favorites
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
