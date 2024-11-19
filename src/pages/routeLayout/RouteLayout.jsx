import "./routelayout.css"
import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function RouteLayout() {
      return (
            <section className="routelayout">
                  <SideBar />
                  <main>
                        <Outlet />
                  </main>
            </section>
      )
}
