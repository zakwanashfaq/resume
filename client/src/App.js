import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [data, setData] = useState("Loading...");
  fetch("/api")
  .then((res) => res.json())
  .then(json_data => {
    setData(json_data.data.highlights[0])
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
