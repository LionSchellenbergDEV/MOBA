import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000')
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
      <div className="App">
        <h1>Backend Test</h1>
        {data ? <p>{data}</p> : <p>Lade...</p>}
      </div>
  );
}

export default App;
