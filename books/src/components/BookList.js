import React from "react";
import BookShow from "./components/BookShow";

const BookList = ({ books }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="grid grid-rows-3 m-3 p-2">{renderedBooks}</div>;
};

export default BookList;
