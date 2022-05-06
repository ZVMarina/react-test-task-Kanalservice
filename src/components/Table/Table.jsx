import React from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

const Table = ({ cars }) => {
   console.log(cars);
   return (
      cars.length
      &&
      <div>
         <table className="table table-striped">
            <TableHeader cars={cars} />
            <TableBody cars={cars} />
         </table>
      </div>
   )
};

export default Table;