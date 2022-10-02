import "./App.scss";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import TableCoins from "./components/TableCoins/TableCoins";
import { db } from './api/firebase.js';
import { collection , onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    onSnapshot(collection(db,'User'),(snapshot)=>{
    console.log(snapshot.docs.map(doc => doc.data()))
    })
    },[0]);
    
  return (
    <>
      <HeaderNavbar />
      <TableCoins/>
    </>
  );
}

export default App;
