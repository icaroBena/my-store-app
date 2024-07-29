import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WelcomeMessage from './components/WelcomeMessage';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomeMessage />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
