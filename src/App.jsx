import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"VERSUS GAMING"} />} />
          <Route path='/xbox/:categoryId' element={<ItemListContainer greeting={"XBOX"} />} />
          <Route path='/playstation/:categoryId' element={<ItemListContainer greeting={"PLAYSTATION"}/>} />
          <Route path='/nintendo/:categoryId' element={<ItemListContainer greeting={"NINTENDO"}/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
