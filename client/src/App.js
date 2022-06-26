import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Header from "./pages/Header";
import Customers from "./pages/Customers";
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/users")
    .then((response) => {setUsers(response.data);})
    .catch((error) => console.log(error));
  }, [users])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Header users={users} />} />
          <Route path = "/customers" element = {<Customers users={users} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
