import { useEffect, useState } from 'react';
import './App.css';
import Header from './layout/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import ShopPage from './pages/ShopPage/ShopPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import SecondShopPage from './pages/ShopPage/SecondShopPage/SecondShopPage';
import ThirdShopPage from './pages/ShopPage/ThirdShopPage/ThirdShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop/:id" element={<SingleProductPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/secondpage" element={<SecondShopPage />} />
        <Route path="/thirddpage" element={<ThirdShopPage />} />
        <Route path="/shop:id" element={<SingleProductPage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
