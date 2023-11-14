import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <div id="homepage">
            <div className="container">
                <section
                    id="intro"
                    className="d-flex flex-column  align-items-center pt-5"
                >
                    <div className="text-center col-xs-3 col-md-2 mb-5">
                        <img
                            style={{
                                borderRadius: "100%",
                            }}
                            id="headshot"
                            className="img-fluid"
                            src="./palash.jpg"
                        />
                    </div>
                    <h1 className="text-center">Palash Bharti</h1>
                    <div id="line"></div>
                    <br />
                    <h2>
                        <span class="material-symbols-outlined">code</span> Web
                        Design & Development
                    </h2>
                    <h2>
                        <span class="material-symbols-outlined">campaign</span>{" "}
                        Digital Marketing
                    </h2>
                    <h2>
                        <span class="material-symbols-outlined">
                            monitoring
                        </span>{" "}
                        Analytics
                    </h2>

                    <a href="#about">
                        <span
                            id="arrowDown"
                            className="material-symbols-outlined"
                        >
                            keyboard_double_arrow_down
                        </span>
                    </a>
                </section>
                <section id="about" className="about">
                    <h2 className="text-center mb-4 yellow-ul">
                        My work = <strong>TLC</strong>&nbsp;+&nbsp;
                        <strong>PASSION</strong>&nbsp;+&nbsp;
                        <strong>CODE</strong>
                    </h2>
                    <div className="row">
                        <div className="col-md-4 offset-md-1">
                            <img
                                alt="collage of icons depicting my values"
                                className="img-fluid"
                                src="./values_icons.png"
                                id="valuescollage"
                            />
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div id="skills">
                                <p className=" mt-4 ">
                                    It's simple, actually! I sleep better when
                                    I:
                                </p>
                                <p>
                                    &#10004; use my Digital Marketing and
                                    Analytics glasses to
                                    <br />
                                    &#10004; create meaningful, user-centric
                                    work that
                                    <br />
                                    &#10004; meets our goals and deadlines while
                                    <br />
                                    &#10004; keeping you in the know.
                                </p>
                                <p>Let's innovate together.</p>
                            </div>
                            <p>
                                <a
                                    role="button"
                                    className="btn btn-lg btn-outline-primary contactbutton mt-4 text-center"
                                    href="mailto:contact@palashbharti.com"
                                >
                                    Contact me
                                </a>
                            </p>
                        </div>
                    </div>
                </section>

                <section id="portfolio" className="pb-5 mt-5 mb-5">
                    <h2 className="text-center mb-5 yellow-ul">
                        <strong>PROJECTS</strong>
                    </h2>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-3">
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
                                        className="btn btn-outline-primary"
                                        target="_blank"
                                    >
                                        Visit site
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Card 2: Theodore's Restaurant--> */}
                        <div className="col-md-4">
                            <div className="card mb-3">
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
                                        to="https://theodoresrestaurant.com/"
                                        target="_blank"
                                        className="btn btn-outline-primary me-3"
                                    >
                                        Visit site
                                    </Link>
                                    <Link
                                        to="/theodores-restaurant"
                                        className="btn btn-outline-primary "
                                    >
                                        See the design
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--Card 3: NYT Bestsellers--> */}

                        <div className="col-md-4">
                            <div className="card mb-3">
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
                                        className="btn btn-outline-primary "
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
