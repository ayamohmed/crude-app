import './App.css';
import { Routes,Route } from 'react-router-dom';
import Nav from './compnents/Nav';
import Sidebar from './compnents/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='row'>
          <div className='col-2 sidebar'>
            <Sidebar />
          </div>
      <div className='col-10'>

      <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="Products" element={<Products />}/>
  <Route path="Products/AddProduct" element={<AddProduct />}/>
  <Route path="Products/:productID" element={<ProductDetails />}/>
     </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
