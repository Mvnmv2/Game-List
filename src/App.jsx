import './App.scss'
import CardList from "./Components/cardList/CardList.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Sort from "./Components/Sort/Sort.jsx";

function App() {

    const [games, setGames] = useState([]);

    const [sortRating, setSortRating] = useState('');
    const [sortPlatform, setSortPlatform] = useState('');
    const [sortLanguage, setSortLanguage] = useState('');
    const [sortGameMod, setGameMod] = useState('');

    const ratingSortType = sortRating ? `rating&_order=${sortRating}` : '';
    const platformSortType = sortPlatform ? sortPlatform : '';
    const languageSortType = sortLanguage ? sortLanguage : '';
    const gameModSortType = sortGameMod ? `multiplayer=${sortGameMod}` : '';

    useEffect(() => {
        const apiUrl = `http://localhost:3001/games?_sort=${ratingSortType}&${platformSortType}&${languageSortType}&${gameModSortType}`;
        axios.get(apiUrl).then((resp) => {
            const alGames = resp.data;
            setGames(alGames);
        });
    }, [sortRating, sortPlatform, sortLanguage, sortGameMod])


    return (
        <>
            <h1 className="mainTitle" title="Список не полный">250 лучших видеоигр</h1>

            <Sort
                rating={sortRating}
                setSortRating={setSortRating}
                platform={sortPlatform}
                setSortPlatform={setSortPlatform}
                sortLanguage={sortLanguage}
                setSortLanguage={setSortLanguage}
                sortGameMod={sortGameMod}
                setGameMod={setGameMod}
            />

            <CardList games={games}/>
        </>

        /*test*/
    )
}

export default App

