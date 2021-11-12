import { useEffect, useState } from "react";
import Movie from "./components/Movie";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route basename ={process.env.PUBLIC_URL} path="/movie/:id" element={<Detail />} /> 
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      
    </Routes>
  </Router>; 
}
export default App;

