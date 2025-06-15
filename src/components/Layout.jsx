import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="p-20">
        <Outlet />
      </div>
    </>
  )
}