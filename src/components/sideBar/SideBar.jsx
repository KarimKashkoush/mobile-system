import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                                          <FontAwesomeIcon icon="fa-solid fa-chart-line" />
                                    </span>
                                    Dashboard
                              </NavLink>
                        </li>
                        <li>
                              <NavLink to="./add">
                                    <span>
                                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                                    </span>
                                    Add Products
                              </NavLink>
                        </li>
                        <li>
                              <NavLink to="./about">
                                    <span>
                                          <FontAwesomeIcon icon="fa-solid fa-chart-line" />
                                    </span>
                                    Link
                              </NavLink>
                        </li>
                        <li>
                              <NavLink to="./contact">
                                    <span>
                                          <FontAwesomeIcon icon="fa-solid fa-chart-line" />
                                    </span>
                                    Link
                              </NavLink>
                        </li>
                  </ul>
            </aside>
      )
}
