import './App.css';
import React from 'react';
import { Jumbotron } from './components/jumbotron';

function App() {
  // const [data, setData] = useState("Loading...");
  // fetch("/api")
  // .then((res) => res.json())
  // .then(json_data => {
  //   setData(json_data.data.highlights[0])
  // })

  return (
    <>
      <Jumbotron />
    </>
  );
}

export default App;
