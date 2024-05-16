import s from './card.module.scss'

import pc from "../../assets/icon/pc.svg";
import playstation from "../../assets/icon/playstation.svg";
import xbox from "../../assets/icon/xbox.svg";
import apple from "../../assets/icon/apple.svg";
import nintendo from "../../assets/icon/nintendo.svg";
import linux from "../../assets/icon/linux.svg";
import ios from "../../assets/icon/ios.svg";
import android from "../../assets/icon/android.svg";

const Card = ({img, title, platforms, rating, languages, multiplayer, countOfGamers}) => {

    const iconsPlatforms = [pc, playstation, xbox, apple, nintendo, linux, ios, android]

    return (
        <div className={s.card}>
            <div className={s.cardImg}>
                <img src={img} alt="poster"/>
            </div>
            <div className={s.cardInfo}>
                <div className={s.supTitle}>
                    <ul className={s.platformIcons}>
                        {
                            platforms.map((icon, i) => (
                                <li key={i} className={s.platformIcons__icon}>
                                    <img src={
                                        iconsPlatforms.find(item => item.includes(icon))
                                    } alt="icon"/>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={s.rating}>{rating}</div>
                </div>

                <div className={s.cardTitle}>
                    {title}
                </div>

                <div className={s.options}>
                    <div className={s.language}>{languages.map(item => item).join(', ')}</div>
                    {multiplayer && <div className={s.multiplayer}>Многопользовательская</div>}
                </div>
                {multiplayer && <div className={s.countOfGamers}>игроков до: {countOfGamers}</div>}
            </div>
        </div>
    );
};

export default Card;