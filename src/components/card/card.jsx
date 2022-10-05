import './card.css';

const Card = ({ robot }) => { 
    const { id, name, email } = robot
    const myID = robot.url.slice(34,robot.url.length-1);
    return (
        <div className="card-container">
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${myID}.png`}
                alt={`${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;