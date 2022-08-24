import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Footer from '../components/Footer/Footer';
import { Home } from '../containers/templates';
import { Posts } from '../containers/pages';

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Posts />}>
            <Route path=":category" element={<Posts />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
