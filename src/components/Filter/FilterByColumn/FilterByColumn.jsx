import Dropdown from "../../Dropdown/Dropdown";
import styles from '../../Filter/Filter.module.css';

const FilterByColumn = ({ filterList, activeFilter, selectActiveFilter }) => {
   return (
      <Dropdown
         trigger=
         {
            <span>{activeFilter?.title ? activeFilter.title : 'Select column'}</span>
         }
         list=
         {
            <ul>
               {
                  filterList.map(item =>
                     <li
                        className={styles.item}
                        key={item.title}
                        onClick={() => selectActiveFilter(item)}
                     >
                        {item.title}
                     </li>
                  )
               }
            </ul>
         }
      />
   )
}

export default FilterByColumn;