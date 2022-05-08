import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterByColumn from '../Filter/FilterByColumn/FilterByColumn';
import FilterByCondition from '../Filter/FilterByCondition/FilterByCondition';
import Table from '../Table/Table';
import styles from './App.module.css'


const App = () => {
   const [cars, setCars] = useState([]);

   const [filterColumns, seFilterColumns] = useState([]);
   const [activeFilterColumn, setActiveFilterColumn] = useState(null);

   const filterConditions = ['equally', 'more', 'less', 'contains'];
   const [activeFilterCondition, setActiveFilterCondition] = useState(null);

   const generateArrFilterColumn = (data) => {
      const keys = Object.keys(data[0]);
      const filters = keys.filter(filter => {
         if (filter !== 'date' && filter !== 'id') {
            return filter;
         }
      })
      return filters;
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
                  select={setActiveFilterColumn}
               />
               {activeFilterColumn &&
                  <FilterByCondition
                     filterList={filterConditions}
                     activeFilter={activeFilterCondition}
                     select={setActiveFilterCondition}
                  />
               }
               {activeFilterCondition &&
                  <input className={styles.input} />
               }
            </div>
         </div>
      </section>
   );
}

export default App;
