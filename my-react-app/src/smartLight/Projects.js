
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AxiosApiCallComponent = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Replace with your API URL
//     axios.get('http://localhost:3000/api/project')
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//         console.log(response)
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []); // The empty array ensures the effect runs once after the initial render

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>API Data:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default AxiosApiCallComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const API_URL = 'http://localhost:3000/api/project';

  // GET request to fetch data
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // POST request to add new data
  const postData = (newData) => {
    axios.post(API_URL, newData)
      .then((response) => {
        setMessage('Data posted successfully!');
        // Optionally, fetch data again to update the list
        setData((prevData) => [...prevData, response.data]);
      })
      .catch((error) => {
        setError(error);
      });
  };

  // PUT request to update existing data
  const updateData = (id, updatedData) => {
    axios.put(`${API_URL}/${id}`, updatedData)
      .then((response) => {
        setMessage('Data updated successfully!');
        // Optionally, update the state with the updated data
        setData((prevData) => 
          prevData.map((item) => (item.id === id ? response.data : item))
        );
      })
      .catch((error) => {
        setError(error);
      });
  };

  // DELETE request to remove data
  const deleteData = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setMessage('Data deleted successfully!');
        // Optionally, remove the deleted item from state
        setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => postData({ name: 'New Data' })}>POST Data</button>
      <button onClick={() => updateData(1, { name: 'Updated Data' })}>PUT Data</button>
      <button onClick={() => deleteData(1)}>DELETE Data</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ApiComponent;
