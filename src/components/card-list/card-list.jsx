import Card from './../card/card';
import './card-list.css';

const CardList = (props) => {
    const { pokemons } = props;
    return (
        <div className="card-list">
            {pokemons.map((pokemon) => {
                return (
                    <Card pokemon={pokemon} key={pokemon.name}/>
                );
            })}
        </div>
    );  
}

export default CardList;