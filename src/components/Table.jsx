import React from "react";

const Table = () => {
  return (
    <table className="table">
      <tbody>
        {books.map((book) => (
          <>
            <tr key={book.id}>
              <td rowSpan="3" className="td_for_imgUrl">
                {<img src={book.urlImage} className="img_from_url" />}
              </td>
              <td>{book.name}</td>
              <td>{<button>Редактировать</button>}</td>
            </tr>
            <tr>
              <td>{book.author}</td>
              <td rowSpan="2">{<button>Удалить</button>}</td>
            </tr>
            <tr>
              <td>{book.bookPublished}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
