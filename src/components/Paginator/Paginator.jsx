import React, { useState } from 'react';

const Paginator = ({ totalLinesCount, pageSize, currentPage, pageChangeHandler, portionSize = 15 }) => {
    const pagesCount = Math.ceil(totalLinesCount / pageSize); // количество страниц

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize); // количество порций
    const [portionNumber, setPortionNumber] = useState(1); // номер порции
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // левая граница порции (какой номер левой границы порции)
    const rightPortionPageNumber = portionNumber * portionSize;

    const setLastPage = () => {
        setPortionNumber(Math.ceil(pagesCount / portionSize));
        pageChangeHandler(pagesCount);
    }

    const setFirstPage = () => {
        setPortionNumber(1);
        pageChangeHandler(1);
    }

    return (
        <ul className="paginator">
            {portionNumber > 1 &&
                <button
                    className='button paginator__button_type_first-last-page'
                    onClick={setFirstPage}
                >1
                </button>
            }

            {portionNumber > 1 &&
                <button
                    className='button paginator__button_type_next-back'
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
                                currentPage === page ? 'paginator__page_active' : 'paginator__page'
                                    || currentPage === rightPortionPageNumber && 'paginator__page_without-indent'
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
                            ? 'button paginator__button_type_next-back paginator__button_without-indent'
                            : 'button paginator__button_type_next-back'
                    }
                    onClick={() => { setPortionNumber(portionNumber + 1) }}
                >Next
                </button>
            }

            {portionCount > portionNumber &&
                <button
                    className='button paginator__button_type_first-last-page'
                    onClick={setLastPage}
                >{pagesCount}
                </button>
            }
        </ul>
    )
}

export default Paginator;