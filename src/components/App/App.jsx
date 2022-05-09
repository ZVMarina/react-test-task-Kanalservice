import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import FilterByColumn from '../Filter/FilterByColumn/FilterByColumn';
import FilterByCondition from '../Filter/FilterByCondition/FilterByCondition';
import Table from '../Table/Table';
import styles from './App.module.css'

const FILTER_CONDITION_BY_STRING = ['contains'];
const FILTER_CONDITION_BY_NUMBER = ['equally', 'more', 'less'];

let initialState;
let newState;
let inputValue;

const App = () => {
   const [state, setState] = useState([]);

   const [filtersColumn, seFiltersColumn] = useState([]);
   // Активный фильтр - объект { title: 'name', type: 'string' or 'number' }
   const [activeFilterColumn, setActiveFilterColumn] = useState(null);

   const filtersCondition = useMemo(() =>
      activeFilterColumn?.type === 'string'
         ? FILTER_CONDITION_BY_STRING
         : FILTER_CONDITION_BY_NUMBER
   );
   const [activeFilterCondition, setActiveFilterCondition] = useState(null);

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

      if (activeFilterColumn.type === 'string') {
         newState = initialState.filter((item) => {
            return item.name.toLowerCase().includes(inputValue.toLowerCase());
         })
      };

      if (activeFilterColumn.type === 'number') {
         switch (activeFilterCondition) {
            case 'equally':
               newState = initialState.filter((item) => {
                  return item.distance === Number(inputValue);
               })
               break

            case 'more':
               newState = initialState.filter((item) => {
                  return item.distance > Number(inputValue);
               })
               break

            case 'less':
               newState = initialState.filter((item) => {
                  return item.distance < Number(inputValue);
               })
         }
      };

      if (inputValue === '') {
         newState = initialState;
      };

      setState(newState)
   }

   useEffect(() => {
      const getData = async () => {
         const { data } = await axios({
            method: `get`,
            url: `https://mocki.io/v1/443a8013-bb4b-4765-a4d0-07271a80522e`
         })

         initialState = data;
         setState(data);
         seFiltersColumn(generateArrFilterColumn(data));
      }
      getData();
   }, [])

   return (
      <section className={styles.app}>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>React test task (LLC Kanalservice)</h1>
            <Table state={state} />
            <div className={styles.dropdowns}>
               <FilterByColumn
                  filtersColumn={filtersColumn}
                  activeFilterColumn={activeFilterColumn}
                  selectActiveFilter={setActiveFilterColumn}
               />
               {activeFilterColumn &&
                  <FilterByCondition
                     filtersCondition={filtersCondition}
                     activeFilterCondition={activeFilterCondition}
                     selectActiveFilter={setActiveFilterCondition}
                  />
               }
               {activeFilterCondition &&
                  <input
                     className={styles.input}
                     onChange={onChangeHandler}
                     type={activeFilterColumn.type === 'number' ? 'number' : 'string'}
                  />
               }
            </div>
         </div>
      </section>
   );
}

export default App;
