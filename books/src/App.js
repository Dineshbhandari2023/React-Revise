import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title, file) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 99), title: title, file: file },
    ];

    setBooks(updatedBooks);
  };

  return (
    <div className="">
      <BookCreate onCreate={createBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
