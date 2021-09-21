import React from "react";

const AddBook = () => {
  return (
    <div>
      <form>
        <div>Редактирование книги</div>
        <div>
          <label>
            Ваше имя
            <input type="text" name="name" placeholder="Введите имя"></input>
          </label>
        </div>
        <div>
          <label>
            Автор
            <input type="text" name="author"></input>
          </label>
        </div>
        <div>
          <label>
            Год выпуска
            <input type="text" name="year"></input>
          </label>
        </div>
        <div>
          <label>
            Изображение
            <input type="text" name="img"></input>
          </label>
        </div>
        <button>Сохранить</button>
        <button>Отменить</button>
      </form>
    </div>
  );
};

export default AddBook;
