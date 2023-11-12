import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Navbar.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
    return (
        <div id="navigationbar">
            <nav className="navbar fixed-top navbar-light d-flex flex-row justify-content-end">
                <ul
                    className="d-flex flex-column"
                    style={{ listStyle: "none" }}
                >
                    <li className="nav-item me-2 mb-3" data-tooltip-id="resume">
                        <Link
                            class="fa fa-file"
                            to="/Resume_PalashBharti.pdf"
                        ></Link>
                    </li>

                    <li
                        className="nav-item me-2 mb-3"
                        data-tooltip-id="email_me"
                    >
                        <Link
                            class="fa fa-envelope"
                            to="mailto:contact@palashbharti.com"
                        ></Link>
                    </li>
                    <li
                        className="nav-item me-2"
                        data-tooltip-id="linkedin_profile"
                    >
                        <Link
                            class="fa fa-linkedin"
                            to="https://www.linkedin.com/in/palashbharti/"
                            target="_blank"
                        ></Link>
                    </li>
                    <ReactTooltip
                        id="resume"
                        place="left"
                        content="Download Resume"
                        type="info"
                    />
                    <ReactTooltip
                        id="email_me"
                        place="left"
                        content="Email Palash"
                        type="info"
                    />
                    <ReactTooltip
                        id="linkedin_profile"
                        place="left"
                        content="LinkedIn"
                        type="info"
                    />
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default Navbar;
