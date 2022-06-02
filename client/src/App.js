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
import { useState, useEffect } from 'react';

function App() {
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(localStorage.getItem('Auth')); //setting the Auth to true or null if the user is logged in
  }, [])
  
  return (
    <Router>
      <Navbar auth={auth} setAuth={setAuth}/>

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setAuth={setAuth}/>} />
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
