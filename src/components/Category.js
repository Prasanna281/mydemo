import React, { useState } from "react";
import Categories from "./Categories";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Category.css'
import Footer from "./Footer";

export default function Category ()
{
    const [data,setData]=useState(Categories);
    const filterResult=(catItem)=>{
const result=Categories.filter((curData)=>{
    return curData.category===catItem;

})
    
setData(result);
    }

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
    </ul>
    <form class="form-inline ">
      <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
    <li class="Sign-Up">
    <a class="nav-link" href="/SignUp"><button type="button" class="btn btn-info">SignUp</button></a>
    </li>
    <p>Have an account?</p>
    <li>
    <a class="nav-link" href="/Login"><button type="button" class="btn btn-primary">Login</button></a>
    </li>
  </div>
  <button type="button" class="btn btn-dark"><Link to ="/Sellerpage">
            Sell
            </Link></button>
</nav>
          
            <h1 className="text-center text-info">Let's shop</h1>
        
            <div className="container-fluid"></div>
            <div className="row mt-5 mx-2"></div>
            <div className="col-md-3"></div>
            
        
<button className="icon">
 <img src="../images/person_circle_icon_159926.png" style={{width:"40px",top: "50px"}}></img><br></br>
</button><br></br>
            <button className="btn btn-success" onClick={()=>filterResult('Mobiles')}>Mobiles</button>
            <button className="btn btn-success" onClick={()=>filterResult('Books')}>Books</button>
            <button className="btn btn-success" onClick={()=>filterResult('Mobiles')}>Furniture</button>
            <button className="btn btn-success" onClick={()=>filterResult('Mobiles')}>Laptops</button>
            <button className="btn btn-success" onClick={()=>filterResult('Mobiles')}>accessories</button>

            {
                <div className="col-md-9">
                    <div className="home__row row">
                        {data.map((values)=>{
                             const {id,title,price,image}=values; 


                             
                            return(
                                <>
                                {/* <div className="cat1 " key={id}>
                            <div class="card">
                                <img src={values.image} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p>Price : {price}/-</p>
                                
                                    <button  className="btn btn-dark">Click here to view</button>
                                </div>
                            </div>
                        </div> */}
                        <div className='product'>
        <div className= "product__info">
        <p>{title}</p>
        <p className='product__price'>

            <small>Rs.</small>
            <strong>{price}</strong>
        </p>
        </div> 
        <img src={image} alt="" />
    
        <button>
            <Link to="/ProductPage">
            Click here to view
            </Link>
            </button>
             
            
    </div>
                                </>
                        )
                        }
                        
                        
                        
                        
                        
                        
                        
                        
                        )}
                       
                    </div>
                </div>

            }
        </>
    );
}