import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByColumn = ({ filterList, activeFilter, select }) => {
    return (
        <Dropdown
            trigger=
            {
                <span>{activeFilter}</span>
            }
            list=
            {
                <ul>
                    {
                        filterList.map(filter =>
                            <li
                                className={styles.item}
                                key={filter}
                                onClick={() => select(filter)}
                            >
                                {filter}
                            </li>
                        )
                    }
                </ul>
            }
        />
    )
}

export default FilterByColumn;