import React from 'react'
import { Link } from 'react-router-dom'
import "./Reuse.css"
const HomeReuse = (props) => {
  return (
    <>
     <div className='main-1'>
       <Link className='link' to="banaras"> <div className='box-1'><img src={props.img1} alt="404" className='img1' /> <h4 className='heading-box-1'>{props.heading}</h4></div> </Link> 
         <div className='box-1'><Link to="/raj"><img src={props.img2} alt="404" className='img1'/></Link><h4 className='heading-box-1'>{props.manali}</h4></div>
         <div className='box-1'><Link to="/agra"><img src={props.img3} alt="404" className='img1'/></Link> <h4 className='heading-box-1'>{props.kasol}</h4></div>
       </div>  <hr />   
    </>
    
  )
}

export default HomeReuse