import React from 'react'
import "./Ecommercenavbar.css"
import {ShoppingCartOutlined} from '@mui/icons-material';
export default function Ecommercenavbar() {
  return (
   
            <div>
              <meta charSet="UTF-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="stylesheet" href="style.css" />
              <title>Document</title>
              <nav className="navbar">
                {/* LOGO */}
                <div className="logo">Luxe store  <ShoppingCartOutlined className='shop'/></div>
                {/* NAVIGATION MENU */}
                <ul className="nav-links">
                  {/* USING CHECKBOX HACK */}
                  {/* <input type="checkbox" id="checkbox_toggle" />
                  <label htmlFor="checkbox_toggle" className="hamburger">☰</label> */}
                  {/* NAVIGATION MENUS */}
                  <div className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">products</a></li>
                    <li><a href="/Loginpage">Login</a></li>
                    <li><a href="/Cart/2">Cart🛒</a></li>

                    <li className="services">
                      <a href="/">Categories</a>

                      {/* DROPDOWN MENU */}
                      {/* <ul className="dropdown">
                        <li><a href="/">Dropdown 1 </a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 3</a></li>
                        <li><a href="/">Dropdown 4</a></li>
                      </ul> */}
                    </li>
                    {/* <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li> */}
                  </div>
                </ul>
              </nav>
            </div>
          );
       }
      