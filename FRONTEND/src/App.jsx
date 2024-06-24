import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductForm } from './components/ProductForm.jsx';
import { ProductList } from './components/ProductList.jsx';

export const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/ProductForm" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
};


