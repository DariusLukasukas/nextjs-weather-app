"use client";
import AddButton from "./add-button";
import MoreMenu from "./more-menu";
import SettingsMenu from "./settings-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex w-full flex-row items-start justify-between py-2">
      <div>
        <AddButton />
      </div>
      <div className="flex items-center gap-2">
        <SettingsMenu />
        <MoreMenu />
      </div>
    </header>
  );
}
