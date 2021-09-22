import React, { useState } from "react";
import "./styles/App.css";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import MyModal from "./components/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "Изучаем JavaScript. Руководство по созданию современных веб-сайтов",
      author: "Э. Браун",
      yearPublished: "2017",
      urlImage:
        "https://media.proglib.io/posts/2020/02/28/98b63ff1a155e950a49f2b3124fb1d62.jpg",
    },
    {
      id: 2,
      name: "Javascript и jQuery. Интерактивная веб-разработка",
      author: "Д. Дакетт",
      yearPublished: "2017",
      urlImage:
        "https://media.proglib.io/posts/2020/03/01/26d39a1f0544121d702d585e03558675.jpg",
    },
    {
      id: 3,
      name: "JavaScript. Шаблоны",
      author: "С. Стефанов",
      yearPublished: "2011",
      urlImage:
        "https://media.proglib.io/posts/2020/02/28/9459c9ee061653bc75ad52329390b8e3.jpg",
    },
    {
      id: 4,
      name: "JavaScript. Оптимизация производительности",
      author: "Н. Закас",
      yearPublished: "2012",
      urlImage:
        "https://media.proglib.io/posts/2020/02/28/b796102778fec6e877cc3f018d87fd9b.jpg",
    },
    {
      id: 5,
      name: "Функциональное программирование на JavaScript",
      author: "Л. Атенсио",
      yearPublished: "2017",
      urlImage:
        "https://media.proglib.io/posts/2020/02/28/71e6dd46cfbd832811e55a98c559acb8.jpg",
    },
  ]);

  const [book, setBook] = useState({});
  const [isBook, setIsBook] = useState(false);

  const [modal, setModal] = useState(false);

  const createBook = (newBook) => {
    setBooks([...books, newBook]);
    setModal(false);
  };

  const removeBook = (book) => {
    setBooks(books.filter((b) => b.id !== book.id));
  };

  const editBook = ({ id, name, author, yearPublished, urlImage }) => {
    setBook({
      id,
      name,
      author,
      yearPublished,
      urlImage,
    });
    setIsBook(true);
  };

  const changeBook = (book) => {
    setBooks(
      books.map((b) => {
        if (b.id === book.id) return (b = book);
        return b;
      })
    );
    setModal(false);
  };

  const closeModalAndCancelEdit = () => {
    setBook({});
    setIsBook(false);
  };

  return (
    <div className="App">
      <h1 style={{ marginTop: "30px" }}>Книжная полка</h1>
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Добавить книгу
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
        cancel={closeModalAndCancelEdit}
      >
        <BookForm
          create={createBook}
          change={changeBook}
          book={book}
          setBook={setBook}
          isBook={isBook}
          setIsBook={setIsBook}
          setModal={setModal}
        />
      </MyModal>
      {books.length ? (
        <BookList
          removeBook={removeBook}
          editBook={editBook}
          books={books}
          setVisible={setModal}
        />
      ) : (
        <h1 className="booklist__empty">Книги не найдены</h1>
      )}
    </div>
  );
}

export default App;
