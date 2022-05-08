import { useRef } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByColumn = ({ filtersColumn, activeFilterColumn, selectActiveFilter }) => {
   const dropdownComponent = useRef(null);
   console.log(dropdownComponent);

   return (
      <Dropdown
         ref={dropdownComponent}
         trigger=
         {
            <span>{activeFilterColumn?.name ? activeFilterColumn.name : 'Select column'}</span>
         }
         list=
         {
            <ul>
               {
                  filtersColumn.map(item =>
                     <li
                        className={styles.item}
                        key={item.name}
                        onClick={() => selectActiveFilter(item)}
                     >
                        {item.name}
                     </li>
                  )
               }
            </ul>
         }
      />
   )
}

export default FilterByColumn;