import React from "react";
import MyNavbar from "./component/shared/MyNavbar";
import { Routes, Route, Link, NavLink, Switch, useParams } from 'react-router-dom';
import Index from "./component/index/Index";
import Foot from "./component/shared/Foot";
import Hakkimizda from "./component/hakkimizda/Hakkimizda";
import Portfolyo from "./component/portfolyo/Portfolyo"
import Iletisim from "./component/iletisim/Iletisim";
import Makaleler from "./component/makaleler/Makaleler";
function App() {
  return (
    <div >
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/anasayfa" element={<Index />} />
        <Route path="/hakkimizda"element={<Hakkimizda/>}/>
        <Route path="/portfolyo"element={<Portfolyo/>}/>
        
        <Route path="/iletisim"element={<Iletisim/>}/>

      </Routes>
      <Foot></Foot>

    </div>
  );
}

export default App;
