import "./sidebar.css";
import { NavLink } from "react-router-dom";
export default function SideBar() {
      return (
            <aside className="sidebar">
                  <section className="logo">
                        <NavLink to="/">
                              <span></span>
                              MobSystem
                        </NavLink>
                  </section>
                  <ul className="sidenavbar">
                        <li>
                              <NavLink to="./dashboard">
                                    <span>
                                          <i className="fa-solid fa-chart-line" />
                                    </span>
                                    Dashboard
                              </NavLink>
                        </li>
                        <li>
                              <NavLink to="./add">
                                    <span>
                                    <i className="fa-solid fa-plus" />
                                    </span>
                                    Add Products
                              </NavLink>
                        </li>
                  </ul>
            </aside>
      )
}
