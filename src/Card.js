
import React from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({duration:1500})
const Card=(props) =>{
    return(<>
    <div className='col-md-4 col-10 mx-auto'>
        <div className="card" data-aos="zoom-in" >
            
  <img className="cardimg card-img-top" src={props.imgsrc}alt={props.imgsrc}/>
  <div className="card-body">
    <h3 className="card-title font-weight-bold">{props.title}</h3>
    <p style={{fontSize:'15px'}} className="card-text">{props.desc}</p>
    <NavLink to="#" className="btn ">Buy it</NavLink>
  </div>
</div>
</div>
        </>);
}
export default Card;