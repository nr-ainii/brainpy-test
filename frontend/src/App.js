import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from './components/Navbar';
import SiSadar from "./SiSadar";
import SiClueless from "./SiClueless";
import WhatNHow from "./WhatNHow";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/si-sadar" element={<SiSadar/>}/>
        <Route path="/si-clueless" element={<SiClueless/>}/>
        <Route path="/what-n-how" element={<WhatNHow/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
