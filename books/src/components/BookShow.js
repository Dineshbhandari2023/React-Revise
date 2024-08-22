const BookShow = ({ book }) => {
  return (
    <div>
      {book.title} {book.file}
    </div>
  );
};

export default BookShow;
