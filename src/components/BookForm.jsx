import React from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const BookForm = ({
  create,
  change,
  book,
  setBook,
  isBook,
  setIsBook,
  setModal,
}) => {
  const addOrEditBook = (e) => {
    e.preventDefault();
    if (
      !Number(book.name) &&
      !Number(book.author) &&
      Number(book.yearPublished) < 2018
    ) {
      if (isBook) {
        change({ ...book });
      } else {
        const newBook = {
          ...book,
          id: Date.now(),
        };
        create(newBook);
      }
      setBook({});
      setIsBook(false);
    } else {
      alert(
        "Проверьте введенные значения: Наименование и Автор - текст, Год выпуска - число, не больше 2017 года"
      );
    }
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    setBook({});
    setIsBook(false);
    setModal(false);
  };

  return (
    <form>
      <label>
        Наименование
        <MyInput
          value={book.name ? book.name : ""}
          onChange={(e) => setBook({ ...book, name: e.target.value })}
          type="text"
          placeholder=""
        />
      </label>
      <label>
        Автор
        <MyInput
          value={book.author ? book.author : ""}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          type="text"
          placeholder=""
        />
      </label>
      <label>
        Год выпуска
        <MyInput
          value={book.yearPublished ? book.yearPublished : ""}
          onChange={(e) => setBook({ ...book, yearPublished: e.target.value })}
          type="text"
          placeholder=""
        />
      </label>
      <label>
        Изображение
        <MyInput
          value={book.urlImage ? book.urlImage : ""}
          onChange={(e) => setBook({ ...book, urlImage: e.target.value })}
          type="text"
          placeholder=""
        />
      </label>
      <MyButton onClick={(e) => addOrEditBook(e)}>Сохранить</MyButton>
      <MyButton onClick={(e) => cancelEdit(e)}>Отменить</MyButton>
    </form>
  );
};

export default BookForm;
