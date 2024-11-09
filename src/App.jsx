import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage';
import Home from './pages/homePage/Home'
import AdminPage from './pages/AdminPage/AdminPage';
import Navbar from './components/navbar/Navbar';
import { ProductProvider } from './context/ProductsContext';
import Separetor from './components/separetor/Separetor';

function App() {

  return (
    <>
      <ProductProvider>
        <Navbar />
        <Separetor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-page" element={<AdminPage />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App
