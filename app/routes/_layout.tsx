import { Outlet } from "@remix-run/react";
import { Menu } from "lucide-react";

export default function Layout() {
  return (
    <div className={"h-[100vh] flex flex-col"}>
      <Outlet />
      <footer>
        <button>
          <Menu />
        </button>
      </footer>
    </div>
  );
}
