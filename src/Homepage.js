import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./Homepage.css"
import axios from "axios"
import Ecommercenavbar from './Ecommercenavbar';
import {useNavigate} from 'react-router-dom';


export default function Homepage() {
  const navigate = useNavigate();

  const[state,setState]=useState([]);

   useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then (response=>{
      console.log("response====>",response);
      setState(response.data)
    
    })
   },[])
      const viewProduct=(id)=>{
        console.log(id);
        navigate(`/viewProduct/${id}`)
      }
      const viewCategories=(name)=>{
        console.log(name);
        navigate(`/Categories/${name}`)
      }
      const viewCart=(id)=>{
        console.log(id);
        navigate(`/Cart/${id}`)

      }
  return (

    <div>
          <Ecommercenavbar/>

    <Carousel
    showThumbs={false}
    autoPlay={true}
    transitionTime={2}
    infiniteLoop={true}
    showStatus={false}>
    <div className='img1'>
        <img  src="https://images.indulgexpress.com/uploads/user/imagelibrary/2019/7/2/original/huda.jpg"/>
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div className='img2'>
        <img src="https://media.idownloadblog.com/wp-content/uploads/2022/10/iOS-16-Depth-Effect-wallpaper-idownloadblog-mockup.jpg" />
        {/* <p className="legend">Legend 2</p> */}
    </div>
    <div className='img3'>
        <img src="https://www.decornation.in/wp-content/uploads/2020/07/modern-velvet-dining-chairs.jpg" />
        {/* <p className="legend">Legend 3</p> */}
    </div>
</Carousel>
<br/><br/>
<div>
<h1 className='cat1'><b>Categories</b></h1>
<br/>
<div className='categ'>

<nav className="navbar">
               
                <ul className="nav-links">
   
                  <div className="menubar">
                    <li><a  onClick={()=>{viewCategories("electronics")}}>ELECTRONICS</a></li>
                    <li><a  onClick={()=>{viewCategories("jewelery")}}>JEWELERY</a></li>
                    <li><a  onClick={()=>{viewCategories("men's clothing")}}>MEN'S CLOTHING</a></li>
                    <li><a  onClick={()=>{viewCategories("women's clothing")}}>WOMEN'S CLOTHING</a></li>
                  </div>
                </ul>
              </nav>


</div>
<br></br>

</div>
<br/>
<div>
  <h1 className='trendh1'><b>Trending Products</b></h1>
  <br/>
  
  <div class="card-deck">
  {state.map((product)=>(
  <div class="card">
    <img src={product.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.title}</h5>
      {/* <h5 class="card-title">{product.id}</h5> */}
      <p class="card-text" onClick={()=>{viewProduct(product.id)}}>  price: ${product.price}</p>
      <button className='viewproduct' onClick={()=>{viewProduct(product.id)}}>  Viewproduct</button>
      
      <button className='addcart' onClick={()=>{viewCart(product.id)}}> Addcart</button>


      {/* <p class="card-text"> {product.description}</p> */}
    </div>
  </div>
  

  ))}
  </div>
</div>

</div>
    
  )
}
