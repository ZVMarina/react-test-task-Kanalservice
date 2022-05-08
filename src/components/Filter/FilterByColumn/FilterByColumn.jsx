import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByColumn = ({ filterList, activeFilter, selectActiveFilter }) => {
   return (
      <Dropdown
         trigger=
         {
            <span>{activeFilter?.name ? activeFilter.name : 'Select column'}</span>
         }
         list=
         {
            <ul>
               {
                  filterList.map(item =>
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