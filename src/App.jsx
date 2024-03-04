// src/App.jsx
import listings from './data/data.json'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer'; 
import './App.css'; 



function App() {

  const [data, setData] = useState(listings.results);




  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <div className="main-content"> 
      <Routes>
        <Route path="/" element={<HomePage data={data} setData={setData} />} />
        <Route path="/item/:id" element={<ItemDetailsPage data={data} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
      <Footer />

    </div>

  );
}

export default App;