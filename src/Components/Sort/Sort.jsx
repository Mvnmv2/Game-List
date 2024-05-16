import s from './sort.module.scss'
import MySelect from "../UI/Select/MySelect.jsx";

const Sort = ({
                  rating,
                  setSortRating,
                  platform,
                  setSortPlatform,
                  sortLanguage,
                  setSortLanguage,
                  sortGameMod,
                  setGameMod
              }) => {

    const selectList = [
        {
            value: rating,
            onChange: setSortRating,
            defaultValue: "Рейтинг",
            options:
                [
                    {value: 'asc', name: 'По возрастанию'},
                    {value: 'desc', name: 'По убыванию'},
                ]

        },
        {
            value: platform,
            onChange: setSortPlatform,
            defaultValue: "Платформа",
            options: [
                {value: 'platform1=pc', name: 'PC'},
                {value: 'platform2=playstation', name: 'Playstation'},
                {value: 'platform3=xbox', name: 'Xbox'},
                {value: 'platform4=apple', name: 'Apple'},
                {value: 'platform5=nintendo', name: 'Nintendo'},
                {value: 'platform6=linux', name: 'Linux'},
                {value: 'platform7=ios', name: 'iOS'},
                {value: 'platform8=android', name: 'Android'},
            ]
        },
        {
            value: sortLanguage,
            onChange: setSortLanguage,
            defaultValue: "Язык/Озвучка",
            options: [
                {value: 'language1=RU', name: 'Русский'},
                {value: 'language2=EN', name: 'English'},
                {value: 'language3=IT', name: 'Italian'},
                {value: 'language4=FR', name: 'Français'},
                {value: 'language5=ESP', name: 'Español'}
            ]
        },
        {
            value: sortGameMod,
            onChange: setGameMod,
            defaultValue: "Режим игры",
            options: [
                {value: "false", name: 'Одиночная'},
                {value: "true", name: 'Многопользовательская'},
            ]
        }
    ]

    return (
        <div className={s.sort}>
            {
                selectList.map(select => (
                    <MySelect value={select.value} onChange={select.onChange} defaultValue={select.defaultValue}
                              options={select.options} key={select.defaultValue}/>
                ))
            }
        </div>
    );
};

export default Sort;