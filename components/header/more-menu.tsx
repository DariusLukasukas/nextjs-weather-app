"use client";

import { Ellipsis, Info, Trash2 } from "lucide-react";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";
import { ABOUT_CONFIG } from "@/lib/config/about-config";
import Link from "next/link";

export default function MoreMenu() {
  const searchParams = useSearchParams();
  const { removeCity, isCitySaved } = useCitiesStore();
  const [aboutOpen, setAboutOpen] = useState(false);

  const name = searchParams.get("location");
  const country = searchParams.get("country");

  const hasLocation = Boolean(name && country);
  const isSaved = hasLocation ? isCitySaved(name!, country!) : false;

  const handleDelete = () => {
    if (!name || !country) return;
    removeCity(name, country);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button size={"icon"} variant={"outline"} className="rounded-full">
              <Ellipsis />
            </Button>
          }
        />
        <DropdownMenuContent className="w-full max-w-fit">
          <DropdownMenuItem onClick={() => setAboutOpen(true)}>
            <Info />
            About Vertex
          </DropdownMenuItem>
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

      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="sr-only">About Vertex</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-2">
            {/* Logo */}
            <div className="flex size-20 items-center justify-center rounded-2xl bg-lime-300 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="190.42 119.5 385.79 340.1"
                className="size-full text-lime-500"
              >
                <path
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="10"
                  d="M250 350a50 50 0 1 1 50-150 50 50 0 1 1 150 0 50 50 0 1 1 100 100 50 50 0 1 1-150 100 50 50 0 1 1-150-50Z"
                />
                <g
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="white"
                  transform="translate(400, 300)"
                >
                  <circle cx="-35" cy="0" r="24" fill="white" />
                  <circle cx="35" cy="0" r="24" fill="white" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-2xl font-bold">{ABOUT_CONFIG.appName}</h3>
              <p className="text-muted-foreground text-sm">
                Version {ABOUT_CONFIG.version}
              </p>
              <Link
                href={ABOUT_CONFIG.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link" size="sm">
                  GitHub Repository
                </Button>
              </Link>

              <p className="text-muted-foreground text-xs">
                {ABOUT_CONFIG.copyright}
              </p>
              <div>
                <p className="text-muted-foreground mt-2 text-center text-xs">
                  Vertex is made possible by{" "}
                  <a
                    href={ABOUT_CONFIG.credits[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline underline-offset-2 transition-colors"
                  >
                    {ABOUT_CONFIG.credits[0].name}
                  </a>{" "}
                  and{" "}
                  <a
                    href={ABOUT_CONFIG.credits[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline underline-offset-2 transition-colors"
                  >
                    {ABOUT_CONFIG.credits[1].name}
                  </a>
                  , as well as other open source software.
                </p>{" "}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
