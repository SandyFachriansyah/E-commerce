import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop'
import Product from './pages/product'
import Cart from './pages/cart'
import LoginSignup from './pages/loginSignup'
import Footer from './component/Footer/Footer';
import men_banner from './component/assets/banner_mens.png'
import women_banner from './component/assets/banner_women.png'
import kid_banner from './component/assets/banner_kids.png'
import ShopCategory from './pages/ShopCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>}/>
          <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kid" />}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<loginSignup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
