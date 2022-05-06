const TableBody = ({ cars }) => {
   return (
      <tbody>
         {
            cars.map((car) =>
               <tr key={car.id}>
                  <th scope="row">{car.id}</th>
                  <td>{car.name}</td>
                  <td>{car.distance}</td>
                  <td>{car.date}</td>
                  <td>{car.quantity}</td>
               </tr>
            )
         }
      </tbody>
   )
}

export default TableBody;