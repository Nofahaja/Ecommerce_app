import React,{useState,useEffect} from 'react'
import Ecommercenavbar from './Ecommercenavbar';
import axios from "axios"
import {useParams} from 'react-router-dom';




export default function Cart() {
    const [state,setState]=useState([]);
    const [datas,setDatas]=useState([])


    const {id}=useParams()
    console.log(datas)

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/carts/${id}`).then (response=>{
          const dds=response.data.products

        setDatas(dds)
        console.log("cart===>",response.data.products)
        })
      },[])
      useEffect(()=>{
        datas&&datas.map((read)=>{
          axios.get(`https://fakestoreapi.com/products/${read.productId}`).then(responsenew=>{
            console.log("response===>",responsenew)
            const ssd=responsenew.data
            console.log(ssd);
            setState([...state,{...ssd}])
      })
       
          
        })
       },[datas])
      console.log("cartdata===>",state);
      console.log(datas)
  return (

    <div>
    <Ecommercenavbar/>
   
<br/><br/>
<div class="card-deck">
{state.map((product)=>(
  <div class="card">
    <img src={product.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.title}</h5>
      <h5 class="card-title">{product.productId}</h5>
      <p class="card-text" > {product.category}</p>

      <p class="card-text" >Quantity: {product.quantity}</p>
    


    
</div>
  
  </div>

  ))}
  </div>

</div>





  )
}
