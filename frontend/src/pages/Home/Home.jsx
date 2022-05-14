import React from 'react';
import Header from '../../components/Header';
import Offer from '../../components/Offer';
import About from '../../components/About';
import Contact from '../../components/Contact';
import FeatureHome from '../../components/FeatureHome';
import Video from '../../components/video';
import { Helmet } from 'react-helmet-async';


function Home(){
  return (
    <div className="App">
      <Helmet>
        <title>Evaactivelife</title>  
      </Helmet>
      <Header/>
      <Offer/> 
      <FeatureHome/>
      <About/>
      <Video/>
      <Contact/>
    </div>
  );
}

export default Home;
