import Card from './../card/card';
import './card-list.css';

const CardList = (props) => {
    const { robots } = props;
    return (
        <div className="card-list">
            {robots.map((robot) => {
                return (
                    <Card robot={robot} key={robot.name}/>
                );
            })}
        </div>
    );  
}

export default CardList;