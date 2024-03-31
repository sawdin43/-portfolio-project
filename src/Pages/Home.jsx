import React from "react";
import Header from "../Component/Header";
import Banners from "../Component/Banners";
import Bio from "../Component/Bio";
import Skills from "../Component/Skills";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Project from "../Component/Project";
import Contact from "../Component/Contact";
library.add(fab);

function Home(){
    return(
       <>
        <Header/>
        <Banners/>
        <Skills/>
        <Bio/>
      <Project/>
      <Contact/>
       
        </>
    )
}
export default Home