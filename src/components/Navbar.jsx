// src/components/Navbar.jsx
import logo from '../../Resources/Logo1.jpg' 

function Navbar() {
  return (
    <div className='navbar1'>
      <img className='logo' src={logo} alt="App logo" />
      <h1 className='title'>Apartments</h1> 
    </div>
  );
}

export default Navbar;