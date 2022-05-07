import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterByColumn from '../Filter/FilterByColumn/FilterByColumn';
import FilterByCondition from '../Filter/FilterByCondition/FilterByCondition';
import Table from '../Table/Table';
import styles from './App.module.css'


const App = () => {
   const [cars, setCars] = useState([]);

   const [filterColumns, seFilterColumns] = useState([]);
   const [activeFilterColumn, setActiveFilterColumn] = useState('Select filter');

   useEffect(() => {
      const getData = async () => {
         const { data } = await axios({
            method: `get`,
            url: `https://mocki.io/v1/92a881cd-33a9-4f44-ab5a-7cc399c34b75`
         })
         setCars(data);
         seFilterColumns(Object.keys(data[0]));
      }
      getData();
   }, [])

   return (
      <section className={styles.app}>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>React test task (LLC Kanalservice)</h1>
            <Table cars={cars} />
            <FilterByColumn
               activeFilter={activeFilterColumn}
               filterList={filterColumns}
               select={setActiveFilterColumn}
            />
         </div>
      </section>
   );
}

export default App;
