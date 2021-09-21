import React from "react";
import Book from "./Book";

const BookList = ({ books, remove }) => {
  return (
    <>
      {books.map((book) => (
        <Book remove={remove} key={book.id} book={book} />
      ))}
    </>
  );
};

export default BookList;
