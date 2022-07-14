import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';

import Admin from './pages/Admin/Admin'
import Manage from './pages/Admin/Manage';

import Users from './pages/Admin/Users';
import EditUser from './pages/Admin/EditUser';

import AdminBooks from './pages/Admin/Books';
import CreateBook from './pages/Admin/CreateBook';
import EditBook from './pages/Admin/EditBook';

import Categories from './pages/Admin/Categories';
import CreateCategory from './pages/Admin/CreateCategory';
import EditCategory from './pages/Admin/EditCategory'

import Contacts from './pages/Admin/Contacts';

import Books from './pages/Books';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [profile, setProfile] = useState();
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(localStorage.getItem('Auth')); //setting the Auth to true or null if the user is logged in
    setProfile(JSON.parse(localStorage.getItem('Profile'))); //sets Profile so it loads everytime you reload the page
  }, []);
  
  return (
    <Router>
      <Navbar auth={auth} setAuth={setAuth} profile={profile} setProfile={setProfile}/>

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/register' element={<Register setAuth={setAuth} setProfile={setProfile} />} />
        <Route path='/login' element={<Login setAuth={setAuth} setProfile={setProfile}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/admin' element={<Admin />}/>
        <Route path='/admin/manage' element={<Manage />} />

        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/users/edit/:id' element={<EditUser />} />

        <Route path='/admin/books' element={<AdminBooks />} />
        <Route path='/admin/books/create' element={<CreateBook />} />
        <Route path='/admin/books/edit/:id' element={<EditBook />} />

        <Route path='/books' element={<Books />} />

        <Route path='/admin/contacts' element={<Contacts />} />

        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/admin/categories/create' element={<CreateCategory />} />
        <Route path='/admin/categories/edit/:id' element={<EditCategory />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
