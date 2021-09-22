import React from "react";
import Book from "./Book";

const BookList = ({ books, setVisible, ...rest }) => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} setVisible={setVisible} {...rest} />
      ))}
    </div>
  );
};

export default BookList;
