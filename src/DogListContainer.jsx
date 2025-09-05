// @ts-check

//import { data } from "browserslist";
import { useState, useEffect } from "react";
import BreedsSelect from "./BreedsSelect";
//import { BreedsSelect } from "./BreedSselect";

// stateや関数はここに！！
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("reizeiin");
  const [images, setImages] = useState([]);
  
useEffect(() => {
  fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        const breedArray = []; 
        Object.entries(data.message).forEach(([breed, subBreeds]) => {
          if (subBreeds.length === 0 ) {
            breedArray.push(breed);
          } else {
            subBreeds.forEach(sub => breedArray.push(`${breed}/${sub}`));
          }
        });
        setBreeds(breedArray);
      });
  }, []);

  const handleShow = () => {
    if (!selectedBreed) return;
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(data => {
        setImages(data.message);
  });
};

  return (
<div>
  <h2>犬種リスト</h2>
  <div style={{display: "flex", gap: 8, alignItems: "center"}}>
   <BreedsSelect
     breeds={breeds}
     selectedBreed={selectedBreed}
     onSelect={setSelectedBreed}
     />
     <button onClick={handleShow} disabled={!selectedBreed}>
     表示
     </button>
  </div>

   <ul style={{display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16}}>
    {images.map((src, index) => (
      <li key={index}>
        <img
          src={src}
          width="150"
          style={{ borderRadius: 8}}
        />
          </li>
    ))}
    </ul>
    </div> 
  );
}

export default DogListContainer
