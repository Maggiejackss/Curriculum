import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';
import { addSelectedBreedsToStore, selectSelectedBreeds } from '../features/selectedBreeds';

const Breeds = () => {
  const [ selectedBreeds, setSelectedBreeds ] = useState([])
  const dispatch = useDispatch();
  const data = useSelector(selectBreeds);

  const handleClick = e => {
    const value = e.target.dataset.breed;
    let _selectedBreeds = [];
    if (selectedBreeds.indexOf(value) > -1) {
        _selectedBreeds = selectedBreeds.filter(breed => breed !== value);
    } else {
        _selectedBreeds = [...selectedBreeds, value];
    }
    setSelectedBreeds(_selectedBreeds);
  }

  const handleSelectedBreeds = () => {
    dispatch(addSelectedBreedsToStore(selectedBreeds));
    setSelectedBreeds([]);
    }

  const breeds = data && data.parentBreeds && data.parentBreeds.map(breed => {
    return (
    <li 
    className={selectedBreeds.indexOf(breed) > -1 ? 'active' : ''}
    data-breed={breed} 
    key={breed} 
    onClick={handleClick} 
    >
      {breed}
    </li>)
  })
return (
  <>
    <div className='breeds-subheader'>
      <h1>Breeds</h1>
      {selectedBreeds.length > 0 && (
      <button onClick={handleSelectedBreeds}>Add selection to favorites?</button>
      )}
      
    </div>
    <ul className='breeds'>{breeds}</ul>
  </>
)
  
};

export default Breeds;