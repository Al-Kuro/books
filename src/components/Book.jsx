import React from "react";
import MyButton from "./UI/Button/MyButton";

const Book = ({ book, remove }) => {
  return (
    <div className="book">
      <div className="book__img">{<img src={book.urlImage} />}</div>
      <div className="book__content">
        <strong>{book.name}</strong>
        <div>{book.author}</div>
        <div>{book.yearPublished}</div>
      </div>
      <div className="book__btns">
        <MyButton>Редактировать</MyButton>
        <MyButton onClick={() => remove(book)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default Book;
