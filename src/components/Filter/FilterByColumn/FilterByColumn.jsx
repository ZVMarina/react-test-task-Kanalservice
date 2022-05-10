import { useRef } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByColumn = ({ filtersColumn, activeFilterColumn, selectActiveFilter, setActiveFilterCondition }) => {
   const dropdownColumnRef = useRef(null);

   const select = (item) => {
      selectActiveFilter(item);
      dropdownColumnRef.current.toggleShowMenu();
      setActiveFilterCondition(null);
   }

   return (
      <Dropdown
         ref={dropdownColumnRef}
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
                        onClick={() => select(item)}
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