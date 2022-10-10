// import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); 
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilterPokemons] = useState(pokemons);
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=890')
      const data = await response.json();
      setPokemons(data.results);

      const getPokemon = (result) => {
        result.forEach(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          
          setAllPokemon(current => { return [...current, data] });
        });
      }
      getPokemon(data.results);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const newFilteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterPokemons(newFilteredPokemons);
  }, [pokemons, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  console.log(allPokemon)
  return (
    <div className="App">
      <h1 className='app-title'>Poke Dex</h1>
      <SearchBox 
        onSearchChange={onSearchChange} 
        placeholder='search pokemons' 
        className='search-box'/>
      <CardList pokemons={filteredPokemons}/>
    </div>   
  );
}

export default App;
