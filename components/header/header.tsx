"use client";
import AddButton from "./add-button";
import SettingsMenu from "./settings-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex w-full flex-row items-start justify-between py-2">
      <AddButton />
      <SettingsMenu />
    </header>
  );
}
