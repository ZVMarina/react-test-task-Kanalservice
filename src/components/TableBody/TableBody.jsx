const TableBody = ({ cars }) => {
   return (
      <tbody>
         {
            cars.map((car) => {
               const date = new Date(car.date);

               return <tr key={car.id}>
                  <th scope="row">{car.id}</th>
                  <td>{car.name}</td>
                  <td>{car.distance}</td>
                  <td>{date.getDay()}-{date.getMonth()}-{date.getFullYear()}</td>
                  <td>{car.quantity}</td>
               </tr>
            }
            )
         }
      </tbody>
   )
}

export default TableBody;