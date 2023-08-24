import React,{useEffect,useState} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom';
import Ecommercenavbar from './Ecommercenavbar';
import "./Viewproduct.css"
import { Carousel } from 'react-responsive-carousel';





export default function Viewproduct() {
    const [state,setState]=useState([])
   const {id}=useParams()
   console.log(id)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then (response=>{
          console.log("response====>",response);
        setState(response.data)
        
        })      
       },[])
       
    
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
        <img  src="https://thumbs.dreamstime.com/b/women-s-handbags-shoes-elegant-pairs-ladies-display-40609274.jpg"/>
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

    <div class="card" style={{width: "18rem"}}>
  <img src={state.image}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title"><b>Title:</b> {state.title}</h6>
    <p class="card-text"> <b>Category:</b> {state.category}</p>
    <p class="card-text"><b>Description:</b> {state.description}</p>

    <p class="card-text"><b>price:</b> ${state.price}</p>


    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

</div>
  )
}
