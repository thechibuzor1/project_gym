import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    let navigate = useNavigate();
  return (
        <div id="main">
            <div className="header-heading">
                <h2>STEP UP YOUR</h2>
                <h1>FITNESS </h1>
                <p className='details'>Build Your Body And Fitness With Professionals</p>
                <div className='header-btn'>
                    <button className='head_btn' onClick={() => {
                        navigate('/Join');
                    }}><b>JOIN US</b></button> 
                </div>
            </div>
        </div>
  )
}

export default Header;