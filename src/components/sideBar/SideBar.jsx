import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SideBar() {
      return (
            <sidebar className="sidebar">
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
                              <NavLink to="./home">
                                    <span>
                                          <FontAwesomeIcon icon="fa-solid fa-chart-line" />
                                    </span>
                                    Link
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
            </sidebar>
      )
}
