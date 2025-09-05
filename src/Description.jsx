// @ts-check

import './App.css'
import { useState } from 'react';
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")


const getDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(deta => {
      setDogUrl(deta.message)
    })
}

  return (
    <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={getDog}>
        更新
      </button>
    </div>
  )
}

export default Description
