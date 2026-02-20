"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { SidebarClose, SidebarOpen } from "lucide-react";
import LocationSearch from "./location-search";
import { AnimatePresence, motion } from "motion/react";
import CityList from "./city-list";
import { WeatherUnits } from "@/types/weather-units";

const SIDEBAR_WIDTH_OPEN = 320;
const SIDEBAR_WIDTH_CLOSED = 52;

export default function Sidebar({
  defaultOpen,
  temperatureUnit,
}: {
  defaultOpen: boolean;
  temperatureUnit: WeatherUnits["temperature"];
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const toggleSidebar = () => {
    const next = !isOpen;
    setIsOpen(next);
    document.cookie = `SIDEBAR_STATE=${next}; path=/; max-age=31536000`;
  };

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.25 }}
      className="bg-card m-3 hidden shrink-0 flex-col items-center gap-2 self-stretch overflow-hidden rounded-2xl p-2 md:flex"
    >
      <Button
        size={"icon"}
        variant={"ghost"}
        onClick={toggleSidebar}
        className={isOpen ? "ml-auto" : ""}
      >
        {isOpen ? <SidebarOpen /> : <SidebarClose />}
      </Button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", bounce: 0, duration: 0.25 }}
            className="flex w-full shrink-0 flex-col gap-2"
          >
            <LocationSearch onFocusChange={setIsSearchFocused} />
            {!isSearchFocused && <CityList temperatureUnit={temperatureUnit} />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
