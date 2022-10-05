// import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

const App = () => {
  console.log('REDER');
  const [searchField, setSearchField] = useState(''); 
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilterRobots] = useState(robots);
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=890')
      const data = await response.json();
      setRobots(data.results);
      await console.log(data.results)

      function getPokemon(result) {
        result.forEach(async (pokemon) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = await response.json();
  
          setAllPokemon(current => { return [...current, data] });
        });
      }
  
      getPokemon(data.results);
    }

    fetchData();
  }, []);

  console.log(allPokemon)

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterRobots(newFilteredRobots);
  }, [robots, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Robots Dex</h1>
      <SearchBox 
        onSearchChange={onSearchChange} 
        placeholder='search robots' 
        className='search-box'/>
      <CardList robots={filteredRobots} />
    </div>   
  );
}



// class App extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       robots: [],
//       searchField: []
//     };
//   }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((result) => 
  //       this.setState(() => {
  //           return { robots: result }
  //         })
  //     );
  // }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   }
  
//   render() {
//     const { robots, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredRobots = robots.filter((robot) => {
//       return robot.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Robots Dex</h1>
//         <SearchBox 
//           onSearchChange={onSearchChange} 
//           placeholder='search robots' 
//           className='search-box'/>
//         <CardList robots={filteredRobots} />
//       </div>
//     );
//   }
// }

export default App;
