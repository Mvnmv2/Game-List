import s from './cardList.module.scss'
import Card from "../Card/Card.jsx";

const CardList = ({games}) => {
    return (
        <div className={s.cardList}>
            {
                games.map((game) => <Card key={game.id} {...game}/>)
            }
        </div>
    );
};

export default CardList;