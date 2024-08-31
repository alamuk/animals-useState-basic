import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimals() {
  const animals = ['cow', 'dog', 'hours', 'bird', 'camel'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick() {
    setAnimals([...animals, getRandomAnimals()]);
  }

  const renderAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animals</button>
      <div className="animal-link">{renderAnimal}</div>
    </div>
  );
}

export default App;
