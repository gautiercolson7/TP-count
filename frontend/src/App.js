import './App.css';
import React from "react";

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:5000/")
    .then((res) => res.json())
    .then((data) => setData(data.pageCount))
  }, []);

  return (
    <div className="App">
      <h1> Page opened {data} times.</h1>
    </div>
  );
}

export default App;
