
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Products from './pages/Products';
import ProductTypes from "./pages/ProductTypes"
import Header from './components/Header/Header';
import Product from './components/products/Product';
import ProductForm from "./components/Forms/ProductForm"
import ProductTypeForm from './components/Forms/ProductTypeForm';
import EditForm from './components/Forms/EditForm';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/products" element={<Products/>}>
            <Route path=':productId' element={<Product/>}/>
            
          </Route>
          <Route path="/addProduct" element={<ProductForm/>}/>
          <Route path="/productTypes" element={<ProductTypes/>}/>
              
            
           
          <Route path="/addProductType" element={<ProductTypeForm/>}/>
          <Route path='/edit/:id' element={<EditForm/>}/>
          <Route path="*" element={<ProductTypes/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
