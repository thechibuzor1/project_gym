import React from 'react';
import Featurebox from './Featurebox';
import f1image from './1.svg';
import f2image from './2.svg';
import f3image from './3.svg';
import f4image from './4.svg';

function Subcriptions() {
  return (
    <div id='features'>
        <h1>Subcriptions</h1>
        <div className='a-container'>
            <Featurebox image={f1image} title='MONTHLY' />
            <Featurebox image={f2image} title='3 MONTHS' />
            <Featurebox image={f3image} title= '6 MONTHS' />
            <Featurebox image={f4image} title= 'YEARLY' />
        </div>
    </div>
  )
}

export default  Subcriptions;
 