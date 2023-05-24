import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedBreeds } from '../features/selectedBreeds';

const Favorites = () => {
  const data = useSelector(selectSelectedBreeds);

  const selectedBreeds = data && data.map(breed => {
    return (
    <li
    data-breed={breed} 
    key={breed}
    >
      {breed}
    </li>
    )
  })

  return (
  <div> 
    <h1>Favorites</h1>
    <div>
      <h2>Favorite Dogs</h2>
      <ul>{selectedBreeds}</ul>
    </div>
  </div>
)};

export default Favorites;