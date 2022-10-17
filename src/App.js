import React from "react";
import MyNavbar from "./component/shared/MyNavbar";
import { Routes, Route, Link, NavLink, Switch, useParams } from 'react-router-dom';
import Index from "./component/index/Index";
import Foot from "./component/shared/Foot";
function App() {
  return (
    <div >
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/anasayfa" element={<Index />} />
        <Route path="/"/>
      </Routes>
      <Foot></Foot>

    </div>
  );
}

export default App;
