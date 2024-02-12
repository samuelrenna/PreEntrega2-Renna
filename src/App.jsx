import { useState } from 'react';
import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    //<div>
      //<h2>Hola, sí funciona</h2>
      //<ItemDetailContainer productId= {1} />
    //</div>
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={"VERSUS GAMING"}/> }/>
        <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
