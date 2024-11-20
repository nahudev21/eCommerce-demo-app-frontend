import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage';
import Home from './pages/homePage/Home'
import AdminPage from './pages/AdminPage/AdminPage';
import Navbar from './components/navbar/Navbar';
import { ProductProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import Separetor from './components/separetor/Separetor';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Separetor />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin-page" element={<AdminPage />} />
          </Routes>
          <Footer />
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App
