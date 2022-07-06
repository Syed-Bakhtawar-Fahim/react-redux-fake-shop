import './App.css';
import { Header } from './container/Header/Header';
import {Route, Routes } from 'react-router-dom'
import ProductListing from './container/ProductListing/ProductListing';
import { ProductDetails } from './container/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = 'react-redux-fake-shop/' element={<ProductListing />} />
        <Route path='product/:productId' element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
