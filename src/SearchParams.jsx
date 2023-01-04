import { useEffect, useState } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["Dog", "Cat", "Reptile", "Elephant", "Snake"];
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds, ] = useBreedList(animal);
  useEffect(() => {
    requestPets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal.toLowerCase()}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault(), requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name=""
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name=""
            disabled={breeds.length === 0}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
