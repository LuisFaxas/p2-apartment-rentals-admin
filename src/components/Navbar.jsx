// src/components/Navbar.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Resources/16.png'
import logo2 from '../../Resources/15.png' 
import './Navbar.css';

function Navbar() {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar1');
      const logo = document.querySelector('.logo');
      const logo2 = document.querySelector('.logo2');
      if (window.scrollY > 0) {
        navbar.classList.add('small');
        logo.classList.add('small');
        logo2.classList.add('small');
      } else {
        navbar.classList.remove('small');
        logo.classList.remove('small');
        logo2.classList.remove('small');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='navbar1'>
      <Link to="/">
        <img className='logo2' src={logo2} alt="App logo" />
        <img className='logo' src={logo} alt="App logo" />
      </Link>
    </div>
  );
}

export default Navbar;