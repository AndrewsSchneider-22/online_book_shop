import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book8 from "../../assets/books/book8.jpg";
import Book9 from "../../assets/books/book9.jpg";
import Book6 from "../../assets/books/book6.jpg";
import Book7 from "../../assets/books/book7.jpg";

import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "The Book of Money",
    rating: 5.0,
    author: "Nana ShowBwoy",
  },
  {
    id: 2,
    img: Book2,
    title: "Think and Grow Rich",
    rating: 4.5,
    author: "Esiedu Nkatsia",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Zigli Nabu",
  },
  {
    id: 4,
    img: Book8,
    title: "Python Programming",
    rating: 5.5,
    author: "Shamsu Deen",
  },
  {
    id: 5,
    img: Book9,
    title: "Coders at Work",
    rating: 6.5,
    author: "Andrews Gyafah",
  },
  {
    id: 6,
    img: Book6,
    title: "Rich Dad Poor Dad",
    rating: 4.7,
    author: "Kodwo Kwakye",
  },
  {
    id: 7,
    img: Book7,
    title: "Get Good with Money",
    rating: 4.5,
    author: "Hassan Ayariga",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12" id="best_books">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
            Discover our top books collection, featuring acclaimed titles across various genres. From bestsellers to 
            critically acclaimed works, explore captivating reads that have captured readers' hearts and minds.
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
