import React from "react";
import about from '../src/images/about2.svg'
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About=() =>{
    return(
    <>
    <Common name='Welcome to About page'
            imgsrc={about}
            visit='/contact'
            btname='Contuct Us'/>
    </>
    )
}
export default About;