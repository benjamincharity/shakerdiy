import { Outlet } from "@remix-run/react";
import { Menu } from "lucide-react";

export default function Layout() {
  return (
    <div className={"h-[100dvh] flex flex-col"}>
      <Outlet />
    </div>
  );
}
