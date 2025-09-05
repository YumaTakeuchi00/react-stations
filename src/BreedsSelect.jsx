// @ts-check
import { DogListContainer } from './DogListContainer'
import { useState, useEffect } from "react";


export const BreedsSelect = ({ breeds, selectedBreed, onSelect }) => {
  //const [selected, setSelectedBreeds] = useState(""); //ここじゃないかも
  return (
    <select
        value={selectedBreed} onChange={(e) => onSelect(e.target.value)} >
          <option value="">選択してください</option>
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>
               {breed}
              </option>
            ))}
    </select>
  );
};

export default BreedsSelect;
