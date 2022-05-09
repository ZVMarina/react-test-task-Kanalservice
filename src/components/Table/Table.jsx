import React, { useState } from "react";
import Paginator from "../Paginator/Paginator";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

const Table = ({ state }) => {
   const [page, setPage] = useState(1);

   const pageChangeHandler = (page) => {
      // props.getUsersThunk(page, props.pageSize);
      setPage(page);
   }

   return (
      <>
         {state.length
            ?
            <table className="table table-striped">
               <TableHeader state={state} />
               <TableBody state={state} />
            </table>
            :
            <p className="no-found-text">
               Ничего не найдено
            </p>
         }
         <Paginator
            totalItemCount={5}
            pageSize={3}
            currentPage={page}
            pageChangeHandler={pageChangeHandler}
         />
      </>

   )
};

export default Table;