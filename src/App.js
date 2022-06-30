import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Category from './components/Category';
import Sellerpage from './components/Sellerpage';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import FPage from './components/FPage';
import Otp from './components/Otp';



function App() {
  
  return (
    <>
    
      <Router>
        <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/SignUp" element={<SignUp></SignUp>}/>
        <Route path="/Login" element={<Login></Login>}/>
        <Route path="/FPage" element={<FPage />}/>
        <Route path="/Otp" element={<Otp />}/>
        <Route path="/Category" element={<HomePage/>}/>
        <Route path="/Sellerpage" element={<Sellerpage></Sellerpage>}/>
        
        <Route path="/" element={<HomePage />}/>
        <Route path="/ProductPage" element={<ProductPage></ProductPage>}/>
</Routes>
          
        
      </Router>
    
    
    
    </>
  );
}
export default App;