import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const BookForm = ({ create }) => {
  const [book, setBook] = useState({
    name: "",
    author: "",
    yearPublished: "",
    urlImage: "",
  });

  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      ...book,
      id: Date.now(),
    };
    create(newBook);
    setBook({
      name: "",
      author: "",
      yearPublished: "",
      urlImage: "",
    });
  };

  return (
    <form>
      <label>
        Наименование
        <MyInput
          value={book.name}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
          type="text"
          placeholder="Название книги"
        />
      </label>
      <label>
        Автор
        <MyInput
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          type="text"
          placeholder="Автор"
        />
      </label>
      <label>
        Год выпуска
        <MyInput
          value={book.yearPublished}
          onChange={(e) => setBook({ ...book, yearPublished: e.target.value })}
          type="text"
          placeholder="Год выпуска"
        />
      </label>
      <label>
        Изображение
        <MyInput
          value={book.urlImage}
          onChange={(e) => setBook({ ...book, urlImage: e.target.value })}
          type="text"
          placeholder="Изображение"
        />
      </label>
      <MyButton onClick={addNewBook}>Добавить книгу</MyButton>
    </form>
  );
};

export default BookForm;
