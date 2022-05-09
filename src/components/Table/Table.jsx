import React from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

const Table = ({ state, newState }) => {
   return (
      state.length
         ?
         <table className="table table-striped">
            <TableHeader state={state} />
            <TableBody state={state} />
         </table>
         :
         <p>
            Ничего не найдено
         </p>

   )
};

export default Table;