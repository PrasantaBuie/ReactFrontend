import React from "react";
import web from '../src/images/bg2.jpg'
import { NavLink } from "react-router-dom";
const Home=() =>{
    return(
    <>
    <section id="header" className='d-flex align-itmes-center'>
    <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-column-center flex-column main">
                  <h1>Grow your business with <strong className="brand-name">Prasanta's logic</strong></h1>
                  <h2 className="my-3">We are the team of talented developer making websites</h2>
                    <div className="mt-3">
                        <NavLink className="btn-get-started" to="/service">Get started</NavLink>

                    </div>
              </div>
              <div className="col-md-6 order-1 order-lg-2 header-img">
                  <img src={web} className='image-fluid animated' alt='homeimg'/>

              </div>
              </div>
            </div>
          </div>
        </div>

    </section>
    </>
    )
}
export default Home;