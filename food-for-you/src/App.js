import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
// import HomePage from './components/HomePage/HomePage';
import HomePage from './components/NewHomePage/HomePage';
import RecipePage from "./components/RecipePage/RecipePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/view-recipes" element={<RecipePage/>} />
      </Routes>
    </Router>
  )
  // const [message, setMessage] = useState("");
//   let [data, setData] = useState({});

//   useEffect(() => {
//     const url = "http://localhost:8000/collections";

//     const fetchData = async() => {
//       try {
//         const res = await fetch(url);
//         const json = await res.json();
//         console.log(JSON.stringify(json));
//         setData(json);
//       } catch(err) {
//         console.log("error: ", err);
//       }
//     };

//     fetchData();
// }, []);

//   return (
//     <div className="App">
//       <h1>Data from MongoDB Atlas</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item._id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
}

export default App;
