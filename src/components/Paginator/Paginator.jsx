import React, { useState } from 'react';
import styles from './Paginator.module.css'

const Paginator = ({ totalItemCount, pageSize, currentPage, pageChangeHandler, portionSize = 5 }) => {
   const pagesCount = Math.ceil(totalItemCount / pageSize); // количество страниц

   const pages = [];

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   const portionCount = Math.ceil(pagesCount / portionSize); // количество порций
   const [portionNumber, setPortionNumber] = useState(1); // номер порции
   const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // левая граница порции (какой номер левой границы порции)
   const rightPortionPageNumber = portionNumber * portionSize;

   console.log(portionNumber);
   
   const setLastPage = () => {
      setPortionNumber(Math.ceil(pagesCount / portionSize));
      pageChangeHandler(pagesCount);
   }

   const setFirstPage = () => {
      setPortionNumber(1);
      pageChangeHandler(1);
   }

   return (
      <ul className={styles.paginator}>
         {portionNumber > 1 &&
            <button
               className={`${styles.button} ${styles.button_firstLast}`}
               onClick={setFirstPage}
            >1
            </button>
         }

         {portionNumber > 1 &&
            <button
               className={`${styles.button} ${styles.button_nextBack}`}
               onClick={() => { setPortionNumber(portionNumber - 1) }}
            >Back
            </button>
         }

         {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
               return (
                  <li
                     key={page}
                     className=
                     {
                        currentPage === page ? `${styles.page_active}` : `${styles.page}`
                           || currentPage === rightPortionPageNumber && `${styles.button_withoutIndent}`
                     }
                     onClick={() => { pageChangeHandler(page) }}
                  >
                     {page}
                  </li>
               )
            })
         }

         {portionCount > portionNumber &&
            <button
               className=
               {
                  currentPage === rightPortionPageNumber
                     ? `${styles.button} ${styles.button_nextBack} ${styles.button_withoutIndent}`
                     : `${styles.button} ${styles.button_nextBack}`
               }
               onClick={() => { setPortionNumber(portionNumber + 1) }}
            >Next
            </button>
         }

         {portionCount > portionNumber &&
            <button
               className={`${styles.button} ${styles.button_firstLast}`}
               onClick={setLastPage}
            >{pagesCount}
            </button>
         }
      </ul>
   )
}

export default Paginator;