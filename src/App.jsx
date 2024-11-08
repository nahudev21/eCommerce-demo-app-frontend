import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage';
import Navbar from './components/navbar/Navbar';
import { ProductProvider } from './context/ProductsContext';

function App() {

  return (
    <>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-page" element={<AdminPage />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App
