import React from "react";
import MyNavbar from "./component/shared/MyNavbar";
import { Routes, Route, Link, NavLink, Switch, useParams } from 'react-router-dom';
import Index from "./component/index/Index";
import Foot from "./component/shared/Foot";
import Hakkimizda from "./component/hakkimizda/Hakkimizda";
function App() {
  return (
    <div >
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/anasayfa" element={<Index />} />
        <Route path="/hakkimizda"element={<Hakkimizda/>}/>
      </Routes>
      <Foot></Foot>

    </div>
  );
}

export default App;
