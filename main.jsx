import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignInNext/SignIn';
import SignInNext from './components/SignInNext/SignInNext';
import Card from './components/Card/Cards';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Swipper from './components/Swipper/Swipper';
import ProductDetails from './components/Card/ProductDetails';

const AppLayout = () => {
  return (
    <>
    
      <Navbar />
      <main>
        <Card />
        <SignIn />
        <Swipper />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignInNext" element={<SignInNext />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
