import React,{useEffect,useState} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom';



export default function Categories() {
    const [state,setState]=useState([])
    const {value}=useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${value}`).then (response=>{
          console.log("response====>",response);
        setState(response.data)
        
        })      
       },[])

  return (
    <div>
          <div class="card-deck">

       {state.map((product)=>(
  <div class="card">
    <img src={product.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.title}</h5>
      {/* <h5 class="card-title">{product.id}</h5> */}
      <p class="card-text">  price: ${product.price}</p>
      
      {/* <p class="card-text"> {product.description}</p> */}
    </div>
  </div>
  

  ))}
  </div>
    </div>
  )
}

