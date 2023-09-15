import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Single from './pages/Single';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post/:postID" element={<Single />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
