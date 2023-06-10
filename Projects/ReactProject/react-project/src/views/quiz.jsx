import React, { useState } from 'react'
import { selectMons } from '../features/pokemonSlice'
import { useSelector } from 'react-redux'

const Quiz = () => {
    const data = useSelector(selectBreeds)

    const breedsImgArray = []

    const randomBreeds = async () => {
        // for (let i = 0; i < 4; i++) {
        const randomBreed =
            data.allBreeds[Math.floor(Math.random() * data.allBreeds.length)]
        const response = await fetch(
            `https://dog.ceo/api/breed/${randomBreed}/images/random`
        )
        const _data = await response.json()
        // }
    }

    useEffect(() => {}, [breedsImgArray])

    const createImgs = async () => {
        for (let i = 0; i < 3; i++) {
            const dog = await randomBreeds()
            const img = document.createElement('img')
            img.src = dog.message
            img.data = `image ${i}`
            console.log(img.src)
            breedsImgArray.push(img)
        }
    }

    const images = [1, 2, 3, 4].map((image) => {
        return <img src="https://placekitten.com/g/300/200" />
    })

    const breeds = breedsImgArray.map((img) => {
        return img
    })

    const handleStart = async () => {
        await createImgs()
    }

    return (
        <>
            <h1>Quiz</h1>
            <button onClick={handleStart}> test </button>
            {breedsImgArray.length > -1 && (
                <div className="breedImgs">{images}</div>
            )}
        </>
    )
}

export default Quiz
