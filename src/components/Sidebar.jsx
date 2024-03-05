// src/components/Sidebar.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { MdHome, MdInfo  } from "react-icons/md";
import './Sidebar.css';

function Sidebar() {
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector('.sidebar');
      if (window.scrollY > 0) {
        sidebar.classList.add('small');
      } else {
        sidebar.classList.remove('small');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className="sidebar-link" to="/">
          <MdHome className='sidebar-icon home-icon' /> Home
          </Link>
        </li>
        <li>
          <Link className="sidebar-link" to="/about">
          <MdInfo className='sidebar-icon about-icon'/> About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;