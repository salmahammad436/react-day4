import React from 'react';
import Register from './pages/formResgisteration/Register';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products/Products';
import Home from './pages/home/Home';
import Aboutus from './pages/AboutUs/Aboutus';
import ProductId from './pages/products/ProductId';
import { Provider } from 'react-redux';
import store from './pages/store/store';
import FavMovies from './pages/favMovies/FavMovies';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:productId" element={<ProductId />} />
            <Route path='/fav' element={<FavMovies/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;