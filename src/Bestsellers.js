import { useState, useEffect } from "react";
import "./Bestsellers.scss";

const Bestsellers = () => {
    const [dropdown, setDropdown] = useState([]);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        const promise = fetch(
            "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=FTs3A5DLSrvU873t4Tp3HvQnwWCDJo5A",
            {
                method: "GET",
            }
        );

        promise
            .then((response) => response.text())
            .then((body) => {
                let parsedData = JSON.parse(body);
                addDropdown(parsedData);
                // collectImages(parsedData);
            });
    }, []);

    // function to build a dropdown with options for each category of books
    const addDropdown = (data) => {
        let categories = data.results.lists;
        // console.log(categories);
        setDropdown(categories);
        console.log(dropdown);
    };

    // function to display image, title and author of the book upon selection from the dropdown
    const displayTitles = (event) => {
        const filteredList = dropdown.filter(
            (category) => category.list_id === Number(event)
        );
        console.log(filteredList);
        setTitles(filteredList[0].books);
    };
    /*
    //function to collect all image URLs in an array
    let coverImgs = [];
    const collectImages = (data) => {
        let categories = data.results.lists;
        let imageHtml = "";
        categories.forEach((category) => {
            category.books.forEach((book) => {
                coverImgs.push(book.book_image);
                coverImgs.forEach((image) => {
                    imageHtml += `<img src="${image}" />`;
                });
            });
        });
    };
    // console.log(coverImgs);

    // script to render a slider of book cover images
    let slideIndex = 0;
    const imageSlider = document.querySelector(".imgSlider");

    const nextImage = () => {
        // slideIndex = (slideIndex + 1) % coverImgs.length;
        if (slideIndex >= coverImgs.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex = slideIndex + 1;
        }
        updateImage();
    };

    const prevImage = () => {
        slideIndex = slideIndex - 1;
        if (slideIndex < 1) {
            slideIndex = coverImgs.length - 1;
        }
        updateImage();
    };

    const updateImage = () => {
        console.log(imageSlider);
        imageSlider.innerHTML = `<img className="slideImage" src=${coverImgs[slideIndex]}>`;
    };
    /*
    const updateImage = () => {
        console.log(slideIndex);
        const imageSlider = document.querySelector(".imgSlider img");
        imageSlider.outerHTML = `<img className="slideImage" src=${coverImgs[slideIndex]}>`;
    };
    */

    /*
    // setInterval(nextImage, 3000);
    const lArrow = document.getElementById("arrow-left");
    const rArrow = document.getElementById("arrow-right");
    lArrow.addEventListener("click", prevImage);
    rArrow.addEventListener("click", nextImage);
    

    // end slider script

    const dropdown = document.getElementById("dropdown");
    const output = document.getElementById("output");
    const bookCover = document.getElementById("bookCover");

    const slides = document.querySelectorAll(".slides img");

    */
    return (
        <div id="bestsellerssStyle">
            <div className="container pt-4 pb-4">
                <h1 className="text-center">New York Times Bestsellers</h1>
                <select
                    className="mt-4 mb-4 ms-auto me-auto text-center"
                    id="dropdown"
                    onChange={(event) => displayTitles(event.target.value)}
                >
                    <option>Pick a category...</option>
                    {dropdown.map((category) => {
                        return (
                            <option
                                value={category.list_id}
                                key={category.list_id}
                            >
                                {category.list_name}
                            </option>
                        );
                    })}
                </select>
                <div id="output">
                    {titles.map((title) => {
                        return (
                            <div className="card pb-3">
                                <div className="row g-0">
                                    <div className="col-sm-4 col-md-4 text-sm-center text-md-right">
                                        <img
                                            src={title.book_image}
                                            className="img-fluid rounded-start"
                                            alt={title.title}
                                        />
                                    </div>
                                    <div className="col-sm-8 col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                {title.title}
                                            </h4>
                                            <h5>{title.author}</h5>
                                            <p className="card-text">
                                                {title.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Bestsellers;
