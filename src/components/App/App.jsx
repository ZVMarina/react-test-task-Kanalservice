import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from '../Table/Table';


const App = () => {
   const [cars, setCars] = useState([]);

   useEffect(() => {
      const getData = async () => {
         const { data } = await axios({
            method: `get`,
            url: `https://mocki.io/v1/92a881cd-33a9-4f44-ab5a-7cc399c34b75`
         })
         setCars(data);
      }
      getData();
   }, [])

   return (
      <div className="App">
         <Table cars={cars} />
      </div>
   );
}

export default App;
