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
                    <h4 class="text-center">
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
                                Want to get in touch? Email me or fill out the
                                form here.
                            </p>
                        </div>
                        {/* <!--End of Contact Text--> */}
                        <div className="col-sm-12 col-md-6">
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
                                {/* <!--End of First and Last Names field--> */}
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
                        </div>
                    </div>
                </section>
                {/* <!--End of contact section--> */}
                <section id="portfolio">
                    <h1>Portfolio</h1>
                    <p>
                        To view more details about the project, click on any of
                        the cards.
                    </p>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                {/* <!--CARD 1--> */}
                                <img
                                    src="https://portfolio.maxmatthe.ws/weatherApp.png"
                                    className="card-img-top"
                                    alt="screenshot of weather app"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Weather App</h5>
                                    <p className="card-text">
                                        First front end project modeled after a
                                        weather app
                                    </p>
                                    <a
                                        href="weather.html"
                                        className="btn btn-primary"
                                    >
                                        Make It Rain
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                {/* <!--CARD 2--> */}
                                <img
                                    src="https://portfolio.maxmatthe.ws/feedbackForm.png"
                                    className="card-img-top"
                                    alt="screenshot of weather app"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Booksellers</h5>
                                    <p className="card-text">
                                        Feedback form modeled after Google
                                        Forms.
                                    </p>
                                    <Link to="/new-york-times-bestsellers">
                                        <h1>Bestsellers</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                {/* <!--CARD 3 MAXFLIX--> */}
                                <img
                                    src="https://portfolio.maxmatthe.ws/maxflix.png"
                                    className="card-img-top"
                                    alt="screenshot of weather app"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Maxflix</h5>
                                    <p className="card-text">
                                        My first project all by myself!
                                        Recreation of a particular streaming
                                        service.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Get Streaming
                                    </a>
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
