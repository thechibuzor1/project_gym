import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';

function Navbarextend() {

  const [nav,setNav] = useState(false);
  const { state } = useContext(Store);
  const { userInfo } = state;


  const changeBackground = () => {
    if (window.scrollY >= 50){
      setNav(true);
    }
    else{
      setNav(false);
    }
  }
  window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='/' className='logo' smooth={true} duration={2000}>
          <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
          <label className='menu-icon' for= 'menu-btn'>
            <span className= 'nav-icon'></span>
          </label>
          <ul className= 'menu'>
            <li><Link to= '/' smooth={true} duration={1000}>Home</Link> </li>
            <li><Link to= '/Explore' smooth={true} duration={1000}>Explore</Link> </li>
            <li><Link to= '/ShopApp' smooth={true} duration={1000}>Shop</Link> </li>
            { userInfo ? (<li><Link to= '/profile' smooth={true} duration={1000}>Account</Link> </li>):
            <li><Link to= '/signin' smooth={true} duration={1000}>Account</Link> </li>}
             
          </ul>
    </nav>
  )
}

export default Navbarextend;
