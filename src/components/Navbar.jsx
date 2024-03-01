// src/components/Navbar.jsx
import logo from '../../Resources/Logo1.jpg' 

function Navbar() {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="App logo" />
      <h1 className='title'>Apartments</h1> 
    </nav>
  );
}

export default Navbar;