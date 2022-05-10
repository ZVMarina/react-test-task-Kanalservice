import { useRef, useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByColumn = ({ filtersColumn, activeFilterColumn, selectActiveFilter, activeFilterCondition }) => {
   /* console.log(activeFilterCondition);
   console.log(activeFilterColumn); */

   const dropdownColumnRef = useRef(null);
   /* const [disabled, setDisabled] = useState(false);

   const disabledFilterColumn = () => {
      if (activeFilterCondition) {
         setDisabled(true);
      }
   } */

   const select = (item) => {
      selectActiveFilter(item);
      dropdownColumnRef.current.toggleShowMenu();
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
         /* disabled={disabled} */
      />
   )
}

export default FilterByColumn;