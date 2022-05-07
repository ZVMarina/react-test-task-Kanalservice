import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByColumn = () => {
    return (
        <Dropdown
            trigger=
            {
                <span>Filter</span>
            }
            list=
            {
                <ul>
                    <li className={styles.item}>name</li>
                    <li className={styles.item}>distance</li>
                    <li className={styles.item}>quantity</li>
                </ul>
            }
        />
    )
}

export default FilterByColumn;