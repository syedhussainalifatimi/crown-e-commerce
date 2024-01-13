import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/shop';
import Header from './components/menu-item/header';
import SignInAndSignUp from './components/signinandsignup';



function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/account' element={<SignInAndSignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
