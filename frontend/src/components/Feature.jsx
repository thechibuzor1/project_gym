import React from 'react';
import Featurebox from './Featurebox';
import f1image from '../images/1.svg';
import f2image from '../images/2.svg';
import f3image from '../images/3.svg';



function Feature() {
  return (
    <div id='features'>
        <h1>PACKAGES</h1>
        <div className='a-container'>
            <Featurebox image={f2image} title='Silver' />
            <Featurebox image={f3image} title='Gold' />
            <Featurebox image={f1image} title='Diamond' />
        </div>
    </div>
  )
}

export default Feature;