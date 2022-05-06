import React from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

const Table = ({ cars }) => {
    console.log(cars);
    return (
        cars.length
        &&
        <table className="table">
            <TableHeader cars={cars} />
            <TableBody cars={cars} />
        </table>
    )
};

export default Table;