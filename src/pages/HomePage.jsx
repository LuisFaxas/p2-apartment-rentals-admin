// src/pages/HomePage.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the app.</p>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;