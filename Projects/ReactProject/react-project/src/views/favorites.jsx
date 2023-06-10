import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMons } from '../features/selectedMons';
import { chosenCards } from '../features/cardsSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { render } from 'react-dom';

const Favorites = () => {
  const chosenOne = useSelector(selectedMons);
  const chosenOneCards = useSelector(chosenCards);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (chosenOne.length <= 0) {
      returnToBreeds()
    }
  })

  const returnToBreeds = () => {
    
    navigate('/breeds')
  }
  


  const _cards = chosenOneCards.map((card, index) => {
    return (
      <div
       className='cardParent linear-gradient'
       key={index}
      >
        <img className="cards" src={card.images.small}></img>
        <div className='text'>Card ID: {card.id} </div>
        <div className='text'>Set Name: {card.set.name}</div>
        <div className='text'>Artist: {card.artist}</div>
        <div className='text'>Purchase at this <a href={card && card.cardmarket && card.cardmarket.url}>link</a>.</div>
      </div>
    )
  })
  




return (
  <div className='favorites'> 
    <h1>Cards for {chosenOne}</h1>
    <div className='buttonDiv'><a href='/breeds'><div className="long-arrow-left"></div></a></div>
    <div>
      <div className='cardHouse'>{_cards}</div>
    </div>
  </div>
  )
}

export default Favorites;