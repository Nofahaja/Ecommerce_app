import React,{useState} from 'react'
import "./Loginpage.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


export default function Loginpage() {
    const navigate = useNavigate();
    const [state,setInputs]=useState(
        {
         
        }
      );
      const setRegister=(event)=>{
        const username=event.target.name;
        const password=event.target.value;
        setInputs({...state,[username]:password})
        console.log(state);
    
      }
     
    const Register=(e)=>{
      e.preventDefault();
  
      axios.post('https://fakestoreapi.com/auth/login',state).then(response=>{ 
        console.log("response====>",response)
        navigate('/')
      
      console.log(state)
    })
    .catch((err)=>{
        console.log(err.response.data)
        if(err)
        {toast.success(err.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
             progress: undefined,
            theme: "colored",
            
            });}
        
    

    }
    )
    
    }
  return (
    <div className='log'>
    <title>Login Form</title>    
    <link rel="stylesheet" type="text/css" href="css/style.css" />    
    <h2>Login Page</h2><br />    
    <div className="loginreg">    
      <form id="login" method="get" action="login.php">    
        <label><b>User Name     
          </b>    
        </label>    
        <input type="text" name="username" id="Uname" placeholder="Username" onChange={setRegister} />    
        <br /><br />    
        <label><b>Password     
          </b>    
        </label>    
        <input type="Password" name="password" id="Pass" placeholder="Password" onChange={setRegister} />    
        <br /><br />    
        <input type="button" name="log" id="log"  defaultValue="Log In Here" onClick={Register} />       
        <br /><br />    
        
      </form>     
    </div>  
    <ToastContainer/>  
  </div>
  )
    }
