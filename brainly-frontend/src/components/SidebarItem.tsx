import { ReactElement } from "react";

interface SideItem {
  text: string;
  icon: ReactElement;
}

export function SidebarItem({ text, icon }: SideItem) {
  return (
    <div className="flex text-gray-800 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
      <div className="pr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
}
