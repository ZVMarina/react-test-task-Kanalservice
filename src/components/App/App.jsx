import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterByColumn from '../Filter/FilterByColumn/FilterByColumn';
import FilterByCondition from '../Filter/FilterByCondition/FilterByCondition';
import Table from '../Table/Table';
import styles from './App.module.css'


const App = () => {
   const [cars, setCars] = useState([]);

   const [filterColumns, seFilterColumns] = useState([]);
   // Активный фильтр - объект { title: 'name', type: 'string' or 'number' }
   const [activeFilterColumn, setActiveFilterColumn] = useState(null);

   const filterConditions = ['equally', 'more', 'less', 'contains'];
   const [activeFilterCondition, setActiveFilterCondition] = useState(null);

   let inputValue;

   const generateArrFilterColumn = (data) => {
      const filters = []
      const keysAndValues = Object.entries(data[0]);
      keysAndValues.forEach(item => {
         if (item[0] !== 'date' && item[0] !== 'id') {
            if (typeof item[1] === 'number') {
               const filterByNumber = {
                  name: item[0],
                  type: typeof item[1]
               }
               filters.push(filterByNumber)
            } else if
               (typeof item[1] === 'string') {
               const filterByString = {
                  name: item[0],
                  type: typeof item[1]
               }
               filters.push(filterByString)
            }
         }
      })
      return filters;
   }

   const onChangeHandler = (evt) => {
      inputValue = evt.target.value;


   }

   useEffect(() => {
      const getData = async () => {
         const { data } = await axios({
            method: `get`,
            url: `https://mocki.io/v1/443a8013-bb4b-4765-a4d0-07271a80522e`
         })
         setCars(data);
         seFilterColumns(generateArrFilterColumn(data));
      }
      getData();
   }, [])

   return (
      <section className={styles.app}>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>React test task (LLC Kanalservice)</h1>
            <Table cars={cars} />
            <div className={styles.dropdowns}>
               <FilterByColumn
                  filterList={filterColumns}
                  activeFilter={activeFilterColumn}
                  selectActiveFilter={setActiveFilterColumn}
               />
               {activeFilterColumn &&
                  <FilterByCondition
                     filterList={filterConditions}
                     activeFilter={activeFilterCondition}
                     select={setActiveFilterCondition}
                  />
               }
               {activeFilterCondition &&
                  <input
                     className={styles.input}
                     onChange={onChangeHandler}
                  />
               }
            </div>
         </div>
      </section>
   );
}

export default App;
