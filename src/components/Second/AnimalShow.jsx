import React, { useState } from "react";
import animal1 from "../../assets/second/animal1.jpeg";
import animal2 from "../../assets/second/animal2.jpeg";
import animal3 from "../../assets/second/animal3.jpeg";
import animal4 from "../../assets/second/animal4.jpeg";
import animal5 from "../../assets/second/animal5.jpeg";
import heart from "../../assets/second/heart.jpg";

const getRandomImage = () => {
  const animals = [animal1, animal2, animal3, animal4, animal5];
  const rnd = Math.floor(Math.random() * animals.length);
  return animals[rnd];
};

const AnimalShow = ({ img }) => {
  const [animals, setAnimals] = useState([]);
  const [clicks, setClicks] = useState(0);

  const handleUsersClick = () => {
    setClicks(clicks + 1);
  };

  const handleClick = () => {
    setAnimals([...animals, getRandomImage()]);
  };

  const handleDelete = () => {
    if (animals.length > 0) {
      setAnimals(animals.slice(0, animals.length - 1));
    }
  };

  return (
    <div className="grid grid-cols justify-center text-center ">
      <button
        className="m-4 bg-blue-400 active:bg-red-400 p-4 rounded-lg shadow-lg border-2 border-gray-500 active:border-black"
        onClick={handleClick}
      >
        Add Animal
      </button>

      <div className="grid grid-cols-7">
        {animals.map((animal, index) => (
          <div>
            <img
              key={index}
              src={animal}
              alt={`animal`}
              className="w-32 h-32 m-2 absolutely "
              onClick={handleUsersClick}
            />
            <img
              src={heart}
              alt="heart"
              style={{ width: 10 + 10 * clicks + "px" }}
            />
          </div>
        ))}
      </div>
      <button
        className="m-4 bg-blue-400 active:bg-red-400 p-4 rounded-lg shadow-lg border-2 border-gray-500 active:border-black"
        onClick={handleDelete}
      >
        Delete Animal
      </button>
    </div>
  );
};

export default AnimalShow;
