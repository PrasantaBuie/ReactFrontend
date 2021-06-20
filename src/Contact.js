import React, { useState } from "react";
const Contact = () => {
    const[data,setData]=useState({
        fullname:'',
        mobile:'',
        email:'',
        message:''
    })
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        if (data.mobile.length<10 || data.mobile.length>10)
        {
            alert("mobile no must be 10 digit ling")
        }
        else{
        alert(`Your Details-------------------
        Name: ${data.fullname},
        Email: ${data.email},
        Mobile: ${data.mobile},
        Message: ${data.message}
        -------------------Thanks for Contacting Us`
        )
        }
    }
    return (<>
        <div className='my-5'>
            <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='container shadow-lg p-5 mb-5 bg-white rounded   contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>

                    <form onSubmit={formSubmit}>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Full Name</label>
                            <input required type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={ data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email Address</label>
                            <input required type="email" className="form-control" id="Enter your email id" name='email' value={data.email } onChange={InputEvent} placeholder="Enter your email id" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Mobile No.</label>
                            <input required type="number" className="form-control" id="exampleFormControlInput1" name='mobile' value={data.mobile } onChange={InputEvent} placeholder="Mobile Number" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={data.message } onChange={InputEvent}></textarea>
                        </div>
                        <div className="col-12 mt-3">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </>);
}
export default Contact;