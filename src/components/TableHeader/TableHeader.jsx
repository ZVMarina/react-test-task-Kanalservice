const TableHeader = ({ cars }) => {
   return (
      <thead>
         <tr>
            {
               Object.entries(cars[0]).map((carData) =>
                  <th key={carData[0]} scope="col">{carData[0]}</th>
               )
            }
         </tr>
      </thead>
   )
}

export default TableHeader;