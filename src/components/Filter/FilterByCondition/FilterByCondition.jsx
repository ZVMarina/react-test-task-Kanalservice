import { useRef } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByCondition = ({ filtersCondition, activeFilterCondition, selectActiveFilter }) => {
   const dropdownConditionRef = useRef(null);

   const select = (filter) => {
      selectActiveFilter(filter);
      dropdownConditionRef.current.toggleShowMenu();
   }

   return (
      <Dropdown
         ref={dropdownConditionRef}
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