import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top"
                style={{ backgroundColor: "transparent" }}
            >
                {/* <a className="navbar-brand" href="#">
                    Navbar
                </a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse mx-auto"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ms-4 ">
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "#0277b5",
                                    fontWeight: "500",
                                    fontSize: 25,
                                }}
                                href="/Resume_PalashBharti.pdf"
                                target="_blank"
                            >
                                Resume
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link font-weight-bold" href="#">
                                Projects
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div
                    className="collapse navbar-collapse d-flex justify-content-end"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav  d-inline-flex">
                        <li className="nav-item me-2">
                            <SocialIcon
                                className="align-items-end justify-content-end"
                                url="mailto:contact@palashbharti.com"
                                fgColor="#0277b5"
                                bgColor="#9bd3f4"
                                network="email"
                                style={{ height: 50, width: 50 }}
                            />
                        </li>
                        <li className="nav-item">
                            <SocialIcon
                                className=" me-2"
                                target="_blank"
                                url="https://www.linkedin.com/in/palashbharti/"
                                fgColor="#0277b5"
                                bgColor="#9bd3f4"
                                style={{ height: 50, width: 50 }}
                            />
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;
