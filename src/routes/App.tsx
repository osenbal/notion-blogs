import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Home } from '../containers/templates';
import { Posts, DetailPost, About, Contact } from '../containers/pages';
import Page404 from '../containers/pages/Page404/Page404';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Posts />}>
            <Route path="/category/:category" element={<Posts />} />
          </Route>
        </Route>
        <Route path="/post/:id" element={<DetailPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
