import React from "react";
import Book from "./Book";

const BookList = ({ books, setModal, ...rest }) => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} setModal={setModal} {...rest} />
      ))}
    </div>
  );
};

export default BookList;
