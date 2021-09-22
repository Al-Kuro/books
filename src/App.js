import React, { useState } from "react";
import "./styles/App.css";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import MyModal from "./components/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import initialArrayWithBooks from "./utils/books";

function App() {
  const [books, setBooks] = useState(initialArrayWithBooks);
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
      <h1>Книжная полка</h1>
      <MyButton style={{ marginTop: "15px" }} onClick={() => setModal(true)}>
        Добавить книгу
      </MyButton>
      <MyModal
        modal={modal}
        setModal={setModal}
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
          setModal={setModal}
        />
      ) : (
        <h1 className="booklist__empty">Книги не найдены</h1>
      )}
    </div>
  );
}

export default App;
