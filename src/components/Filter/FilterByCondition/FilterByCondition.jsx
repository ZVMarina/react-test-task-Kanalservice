import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByCondition = () => {
    return (
        <Dropdown
            trigger=
            {
                <span>Condition</span>
            }
            list=
            {
                <ul>
                    <li className={styles.item}>equally</li>
                    <li className={styles.item}>more</li>
                    <li className={styles.item}>less</li>
                    <li className={styles.item}>contains</li>
                </ul>
            }
        />
    )
}

export default FilterByCondition;