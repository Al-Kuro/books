import React from "react";
import MyButton from "./UI/Button/MyButton";

const Book = ({ book, removeBook, editBook, setModal }) => {
  return (
    <div className="book">
      <div className="book__img">{<img src={book.urlImage} />}</div>
      <div className="book__content">
        <strong>{book.name}</strong>
        <div>{book.author}</div>
        <div>{book.yearPublished}</div>
      </div>
      <div className="book__btns">
        <MyButton
          onClick={() => {
            setModal(true);
            editBook(book);
          }}
        >
          Редактировать
        </MyButton>
        <MyButton onClick={() => removeBook(book)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default Book;
