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
      console.log("name", !Number(book.name));
      console.log("author", typeof book.author === "string");
      console.log("yearPublished", Number(book.yearPublished) < 2018);
      alert(
        "Проверьте введенные значения: Наименование и Автор - строки, Год выпуска - не больше 2017 года"
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
          required
        />
      </label>
      <label>
        Автор
        <MyInput
          value={book.author ? book.author : ""}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          type="text"
          placeholder=""
          required={true}
        />
      </label>
      <label>
        Год выпуска
        <MyInput
          value={book.yearPublished ? book.yearPublished : ""}
          onChange={(e) => setBook({ ...book, yearPublished: e.target.value })}
          type="text"
          placeholder=""
          required={true}
        />
      </label>
      <label>
        Изображение
        <MyInput
          value={book.urlImage ? book.urlImage : ""}
          onChange={(e) => setBook({ ...book, urlImage: e.target.value })}
          type="text"
          placeholder=""
          required={false}
        />
      </label>
      <MyButton onClick={(e) => addOrEditBook(e)}>Сохранить</MyButton>
      <MyButton onClick={(e) => cancelEdit(e)}>Отменить</MyButton>
    </form>
  );
};

export default BookForm;
