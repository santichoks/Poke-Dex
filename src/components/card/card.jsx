import './card.css';

const Card = ({ pokemon }) => { 
    const { name } = pokemon
    const myID = pokemon.url.slice(34,pokemon.url.length-1);
    return (
        <div className="card-container">
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${myID}.png`}
                alt={`${name}`} />
            <h2>{name}</h2>
        </div>
    );
}

export default Card;