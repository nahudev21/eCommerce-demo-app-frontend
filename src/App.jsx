import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-page" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App
