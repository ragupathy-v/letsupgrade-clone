import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./Compontens/Layout/Header";
import Main from "./Compontens/Layout/Main";
import About from "./Compontens/Routes/About";


function App() {

  const location =useLocation()
  const shownav= location.pathname !== '/aboutus'
  return (
    <>
     {shownav && <Header />}
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="aboutus" element={<About/>}/>
    </Routes>
    
    </>
  );
}

export default App;
