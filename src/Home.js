import React from "react";
import web from '../src/images/bg.svg'
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home=() =>{
    return(
    <>
    <Common name='Build Your Carrier With'
            imgsrc={web}
            visit='/service'
            btname='Get Started'/>
    </>
    )
}
export default Home;