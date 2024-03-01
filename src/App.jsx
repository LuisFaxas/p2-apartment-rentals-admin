// src/App.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


import ItemDetailsPage from './pages/ItemDetailsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/item/:id" component={ItemDetailsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;