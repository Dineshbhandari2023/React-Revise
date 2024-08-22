import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title });
    setTitle("");
  };

  return (
    <div className="flex flex-col bg-blue-100 m-3 rounded-md">
      <h1 className="flex justify-center text-center m-3 p-2 font-mono font-bold text-4xl">
        Add and Create a usefull Booklist...
      </h1>
      <form
        className="ml-20 p-2 flex flex-col tracking-wider text-lg"
        onSubmit={handleSubmit}
      >
        Title:
        <input
          className="px-4 py-2 mt-2 rounded-lg w-3/5 text-md focus:shadow-md focus:shadow-blue-400"
          type="text"
          value={title}
          name="title"
          placeholder="Enter Book Title"
          onChange={handleInputChange}
        />
        <input type="file" onChange={handleChange} className="py-4" />
        <img src={file} alt="add image" />
        <button className="mt-4 px-2 py-1 tracking-wide bg-green-400 w-20 rounded-md active:bg-blue-400">
          Create
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
