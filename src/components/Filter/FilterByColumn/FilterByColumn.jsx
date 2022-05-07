import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByColumn = ({ activeFilter, filterList, select }) => {
    return (
        <Dropdown
            trigger=
            {
                <span>{activeFilter}</span>
            }
            list=
            {
                <ul className={styles.list}>
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