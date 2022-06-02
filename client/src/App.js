import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

import Admin from './pages/Admin/Admin'
import Manage from './pages/Admin/Manage';
import Notifications from './pages/Admin/Notifications';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms' element={<Terms />} />

        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/manage' element={<Manage />} />
        <Route path='/admin/notifications' element={<Notifications />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
