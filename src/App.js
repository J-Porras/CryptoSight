import "./App.scss";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import TableCoins from "./components/TableCoins/TableCoins";
import { db } from "./api/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Glosary from "./pages/glosario/Glosary";
import Blockchain from "./pages/glosario/Blockchain/Blockchain";
import Bitcoin from "./pages/glosario/Bitcoin/Bitcoin";
import Footer from "./components/Footer/Footer";
import Portafolio from "./pages/Portafolio/Portafolio";

function App() {
  useEffect(() => {
    /*       onSnapshot(collection(db, "users"), (snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
      });
 */
  }, [0]);

  return (
    <>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<TableCoins />} />
        <Route path="/portafolio" element={<Portafolio />} />

        <Route path="/glosario">
          <Route index element={<Glosary />} />
          <Route path="blockchain" element={<Blockchain />} />
          <Route path="bitcoin" element={<Bitcoin />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
