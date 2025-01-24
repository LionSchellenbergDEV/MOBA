import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

/*function App() {
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
*/
function App() {
    return (
        <Router>
            <div>
                <header id="header">
                    <strong>Schatten über Eldoria</strong>
                    <nav>
                        <a href="/">Startseite</a>
                        <a href="/login">Anmelden</a>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
