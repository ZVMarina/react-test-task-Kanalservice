import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByCondition = ({ filtersCondition, activeFilterCondition, select }) => {
   return (
      <Dropdown
         trigger=
         {
            <span>
               {activeFilterCondition ? activeFilterCondition : 'Select condition'}
            </span>
         }
         list=
         {
            <ul>
               {
                  filtersCondition.map(filter =>
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

export default FilterByCondition;