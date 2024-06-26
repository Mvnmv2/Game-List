import s from './select.module.scss'

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={s.select}
            value={value}
            onChange={event => onChange(event.target.value)}>

            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}

        </select>
    );
};

export default MySelect;