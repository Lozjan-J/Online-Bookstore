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

import AdminBooks from './pages/Admin/BookCRUD/Books';
import CreateBook from './pages/Admin/BookCRUD/CreateBook';
import EditBook from './pages/Admin/BookCRUD/EditBook';

import Categories from './pages/Admin/CategoryCRUD/Categories';
import CreateCategory from './pages/Admin/CategoryCRUD/CreateCategory';
import EditCategory from './pages/Admin/CategoryCRUD/EditCategory';

import Authors from './pages/Admin/AuthorCRUD/Authors';
import CreateAuthor from './pages/Admin/AuthorCRUD/CreateAuthor';
import EditAuthor from './pages/Admin/AuthorCRUD/EditAuthor';

import Languages from './pages/Admin/LanguageCRUD/Languages';
import CreateLanguage from './pages/Admin/LanguageCRUD/CreateLanguage';
import EditLanguage from './pages/Admin/LanguageCRUD/EditLanguage';

import Genres from './pages/Admin/GenreCRUD/Genres';
import CreateGenre from './pages/Admin/GenreCRUD/CreateGenre';
import EditGenre from './pages/Admin/GenreCRUD/EditGenre';

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

        <Route path='/admin/authors' element={<Authors />} />
        <Route path='/admin/authors/create' element={<CreateAuthor />} />
        <Route path='/admin/authors/edit/:id' element={<EditAuthor />} />

        <Route path='/admin/languages' element={<Languages />} />
        <Route path='/admin/languages/create' element={<CreateLanguage />} />
        <Route path='/admin/languages/edit/:id' element={<EditLanguage />} />

        <Route path='/admin/genres' element={<Genres />} />
        <Route path='/admin/genres/create' element={<CreateGenre />} />
        <Route path='/admin/genres/edit/:id' element={<EditGenre />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
