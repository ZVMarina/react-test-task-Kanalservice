import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import FilterByColumn from '../Filter/FilterByColumn/FilterByColumn';
import FilterByCondition from '../Filter/FilterByCondition/FilterByCondition';
import Paginator from '../Paginator/Paginator';
import Table from '../Table/Table';
import styles from './App.module.css'

const FILTER_CONDITION_BY_STRING = ['contains'];
const FILTER_CONDITION_BY_NUMBER = ['equally', 'more', 'less'];

const PAGE_SIZE = 3;

let initialState = [];

const App = () => {
   // Количество элементов на странице
   const [state, setState] = useState([]);
   // Количество найденных элементов
   const [findState, setFindState] = useState([]);

   const [page, setPage] = useState(1);

   const [filtersColumn, seFiltersColumn] = useState([]);
   // Активный фильтр - объект { title: 'name', type: 'string' or 'number' }
   const [activeFilterColumn, setActiveFilterColumn] = useState(null);

   const filtersCondition = useMemo(() =>
      activeFilterColumn?.type === 'string'
         ? FILTER_CONDITION_BY_STRING
         : FILTER_CONDITION_BY_NUMBER
   );
   const [activeFilterCondition, setActiveFilterCondition] = useState(null);

   const [filterInputValue, setFilterInputValue] = useState('');

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

   const onChangeHandler = () => {
      let filteredState = [];

      if (activeFilterColumn?.type === 'string') {
         filteredState = initialState.filter((item) => {
            return item.name.toLowerCase().includes(filterInputValue.toLowerCase());
         })
      };

      if (activeFilterColumn?.type === 'number') {
         switch (activeFilterCondition) {
            case 'equally':
               filteredState = initialState.filter((item) => {
                  return item[activeFilterColumn.name] === Number(filterInputValue);
               })
               break

            case 'more':
               filteredState = initialState.filter((item) => {
                  return item[activeFilterColumn.name] > Number(filterInputValue);
               })
               break

            case 'less':
               filteredState = initialState.filter((item) => {
                  return item[activeFilterColumn.name] < Number(filterInputValue);
               })
         }
      };

      if (filterInputValue === '') {
         filteredState = initialState.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
      };

      setFindState(filteredState);
      setState(filteredState.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE));
   }

   const pageChangeHandler = (page) => {
      setPage(page);
   }

   const reset = () => {
      setActiveFilterColumn(null);
      setActiveFilterCondition(null);
      setFilterInputValue('');
      setState(initialState.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE))
   }

   useEffect(() => {
      const getData = async () => {
         const { data } = await axios({
            method: `get`,
            url: `https://mocki.io/v1/443a8013-bb4b-4765-a4d0-07271a80522e`
         })

         initialState = data;
         setState(data.slice(0, PAGE_SIZE));
         seFiltersColumn(generateArrFilterColumn(data));
      }
      getData();
   }, [])

   const filterIsActive = useMemo(() =>
      activeFilterColumn !== null
      && activeFilterCondition !== null
      && filterInputValue
   )

   useEffect(() => {
      setState(filterIsActive ?
         findState.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
         : initialState.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE));
   }, [page])

   useEffect(() => {
      onChangeHandler();
   }, [filterInputValue])

   return (
      <section className={styles.app}>
         <div className={styles.wrapper}>
            <h1 className={styles.title}>
               React test task (LLC Kanalservice)
            </h1>
            <Table state={state} />
            <Paginator
               totalItemCount={filterIsActive ? findState.length : initialState.length}
               pageSize={PAGE_SIZE}
               currentPage={page}
               pageChangeHandler={pageChangeHandler}
            />
            <div className={styles.dropdowns}>
               <FilterByColumn
                  filtersColumn={filtersColumn}
                  activeFilterColumn={activeFilterColumn}
                  selectActiveFilter={setActiveFilterColumn}
                  setActiveFilterCondition={setActiveFilterCondition}
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
                     onInput={(event) => setFilterInputValue(event.target.value)}
                     type={activeFilterColumn.type === 'number' ? 'number' : 'string'}
                  />
               }
               <button
                  onClick={reset}
                  className={styles.button}
               >Reset
               </button>
            </div>
         </div>
      </section>
   );
}

export default App;
