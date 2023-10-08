import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <div id="homepage">
            <palette>
                <color
                    name="Honolulu Blue"
                    hex="0277b5"
                    r="2"
                    g="119"
                    b="181"
                />
                <color name="Baby blue" hex="9bd3f4" r="155" g="211" b="244" />
                <color
                    name="Uranian Blue"
                    hex="b6e1fa"
                    r="182"
                    g="225"
                    b="250"
                />
                <color
                    name="Carrot orange"
                    hex="f29c33"
                    r="242"
                    g="156"
                    b="51"
                />
                <color name="Davy's gray" hex="545454" r="84" g="84" b="84" />
            </palette>
            <div className="container">
                <section
                    id="intro"
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <h1 className="text-center">Palash Bharti</h1>
                    <div id="line"></div>
                    <br />
                    <h2>
                        <span class="material-symbols-outlined">code</span>{" "}
                        Junior Web Developer
                    </h2>
                    <h2>
                        <span class="material-symbols-outlined">
                            monitoring
                        </span>{" "}
                        Digital Analytics Implementation Specialist
                    </h2>
                    <h2>
                        <span class="material-symbols-outlined">campaign</span>{" "}
                        Digital Marketing Specialist
                    </h2>
                    {/* <code>console.log("Hello World");</code> */}
                    <a href="#about">
                        <span
                            id="arrowDown"
                            className="material-symbols-outlined"
                        >
                            keyboard_double_arrow_down
                        </span>
                    </a>
                </section>
                <section id="about">
                    <h1>About</h1>
                    <h4>
                        A Web Developer who marries code with digital marketing
                        finesse.{" "}
                    </h4>{" "}
                    <h5>
                        {" "}
                        With a diverse skillset in full stack web development, I
                        craft seamless digital journeys. My background in
                        Digital Marketing and Analytics enhances my approach,
                        creating websites that not only function flawlessly but
                        engage with purpose. Let's innovate together.
                    </h5>
                </section>
                <section id="contact">
                    <h1>Contact</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <p>
                                Want to get in touch? Email me at{" "}
                                <Link
                                    style={{ color: "#ffd699" }}
                                    to="mailto:contact@palashbharti.com"
                                >
                                    contact@palashbharti.com
                                </Link>
                            </p>
                        </div>
                        {/* <!--End of Contact Text--> */}
                        {/* FORM TO BE UPLOADED SOON */}
                        {/* <div className="col-sm-12 col-md-6">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                />
                                <textarea placeholder="Enter your message here..."></textarea>
                                <button
                                    tyoe="button"
                                    className="btn btn-primary"
                                >
                                    Send ✉️
                                </button>
                            </form>
                        </div> */}
                    </div>
                </section>
                {/* <!--End of contact section--> */}
                <section id="portfolio" className="pb-5">
                    <h1>Portfolio</h1>

                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                {/* <!--CARD 1--> */}
                                <img
                                    src="/flixmatch-logo.png"
                                    className="card-img-top"
                                    alt="screenshot of weather app"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">FlixMatch</h5>
                                    <p className="card-text">
                                        A web app that finds you a movie-buddy
                                        based on your movie ratings
                                    </p>
                                    <p className="card-text">
                                        Employs ReactJS, Sequelize, Postgres and
                                        Bootstrap
                                    </p>
                                    <Link
                                        to="https://flixmatch.co"
                                        className="btn btn-primary"
                                    >
                                        See the design
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Card 2: Theodore's Restaurant--> */}
                        <div className="col-4">
                            <div className="card">
                                <img
                                    src="/theodores_restaurant_logo_500×200.png"
                                    className="card-img-top"
                                    alt="screenshot of weather app"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Theodore's Restaurant
                                    </h5>
                                    <p className="card-text">
                                        A website built for a local restaurant.
                                    </p>
                                    <p className="card-text">
                                        Employs Wordpress and Elementor
                                    </p>
                                    <Link
                                        to="/theodores-restaurant"
                                        className="btn btn-primary"
                                    >
                                        See the design
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Card 3: NYT Bestsellers--> */}

                        <div className="col-4">
                            <div className="card">
                                {/* <!--CARD 2--> */}
                                <img
                                    src="/bestsellers.png"
                                    className="card-img-top"
                                    alt="screenshot of weather app"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        New York Times Bestsellers
                                    </h5>
                                    <p className="card-text">
                                        A mini-app pulling top New York Times
                                        Bestsellers from the API
                                    </p>
                                    <p className="card-text">
                                        Employs HTML, CSS and JavaScript
                                    </p>
                                    <Link
                                        to="/new-york-times-bestsellers"
                                        className="btn btn-primary"
                                    >
                                        Check it out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
