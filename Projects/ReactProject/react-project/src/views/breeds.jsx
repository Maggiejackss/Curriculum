import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMons } from '../features/pokemonSlice'
import { addSelectedMonsToStore } from '../features/selectedMons'
import { Navigate, useNavigate } from 'react-router-dom';
import { addChosenCardsToStore } from '../features/cardsSlice';

const Pokemon = () => {
    const [selectedMons, setSelectedMons] = useState([])
    const dispatch = useDispatch()
    const data = useSelector(selectMons)
    const navigate = useNavigate();

    const handleClick = (e) => {
        const value = e.target.dataset.name
        console.log(value);
        setSelectedMons([value]);
        handleSelectedMons(value);
        console.log(value)
        fetchCards(value)
        navigateToFavorites()
        
    }

    const handleChosenCards = (value) => {
        dispatch(addChosenCardsToStore(value))
    }

    const handleSelectedMons = (value) => {
        dispatch(addSelectedMonsToStore(value))
    }

    const navigateToFavorites = () => {
        navigate('/favorites')
    }

    const fetchCards = async (chosenOne) => {
        let response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${chosenOne}"`);
        let data = await response.json();
        if (data.data.length > 0) {
            const cardSources = dataPick(data);
            handleChosenCards(cardSources)
            navigateToFavorites()
            
        } else {
            let modifiedChosenOne = chosenOne.replace(/-/g, " ");
            response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${modifiedChosenOne}"`);
            data = await response.json();
            if (data.data.length > 0) {
                const cardSources = dataPick(data);
                handleChosenCards(cardSources)
                navigateToFavorites()
            } else {
                const firstWord = chosenOne.split("-");
                response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${firstWord}"`);
                data = await response.json();
                const cardSources = dataPick(data);
                console.log(cardSources)
                handleChosenCards(cardSources)
                navigateToFavorites()
            }
        }
    };
    
    /**
     * The function takes in an object of data and returns an array of URLs for large images.
     * @returns The function `imagePick` takes in an object `data` and returns an array of URLs for the
     * `large` images of each card in the `data` object.
     */
    const dataPick = data => {
        const cardSources = data.data.map(card => card);
        console.log(cardSources)
        return cardSources
    }

  
   /* This code is creating a list of Pokemon names using data from the Redux store. It first checks if
   the `data` object and `data.allMons` array exist using the `&&` operator. If they do, it maps
   over the `data.allMons` array and creates a list item (`<li>`) for each Pokemon name. The
   `data-breed` attribute is set to the name of the Pokemon and the `key` attribute is also set to
   the name of the Pokemon. The `name` of the Pokemon is then displayed inside the list item.
   However, the `onClick` event handler for each list item is currently commented out. */
    const _pokemon =
        data &&
        data.allMons &&
        data.allMons.map((name) => {
            return (
                <li
                    data-name={name}
                    key={name}
                    onClick={handleClick}
                >
                    {name}
                </li>
            )
        })
    return (
        <>
            <div className="breeds-subheader">
                <h1>Pokemon</h1>
            </div>
            <ul className="breeds">{_pokemon}</ul>
        </>
    )
}

export default Pokemon
