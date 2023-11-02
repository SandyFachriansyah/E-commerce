import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop'
// Start Correction :

// import Product from './pages/Product' <= Kode sebelumnya, error karena dengan kode import ini, React minta file Product.jsx karena 'Product'
import Product from './pages/product' // <= Kode sekarang, dikoreksi jadi 'product' karena adanya product.jsx 

// Note :
// contoh misalnya kalo ./pages/cart maka React akan cari file cart.jsx di folder pages
// atau misalnya ./component/Footer/Footer maka akan dicari file Footer.jsx di folder component -> Footer

// End Correction
import Cart from './pages/Cart'
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
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kid" />}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
