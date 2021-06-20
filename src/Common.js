import React from "react";
import web from '../src/images/bg.svg'
import { NavLink } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({duration:1500})
const Common=(props) =>{
    return(
    <>
    <section id="header" className='d-flex justify-content-center'>
    <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row" data-aos="zoom-out">
              <div className="col-md-6 pt-5 pt-lg-0 mt-auto order-2 order-lg-1 d-flex justify-column-center flex-column">
                  <h1>{props.name} <br/><strong className="brand-name">Prasanta's logic</strong></h1>
                  <h2 className="my-3">We are the team of talented developer teaching and making websites</h2>
                    <div className="mt-3">
                        <NavLink className="btn" to={props.visit}>{props.btname}</NavLink>

                    </div>
              </div>
              <div className="col-md-6 order-1 order-lg-2 header-img">
                  <img  src={props.imgsrc} className='image-fluid animated' alt='Commonimg'/>

              </div>
              </div>
            </div>
          </div>
        </div>

    </section>
    </>
    )
}
export default Common;