import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FitnessReuse from '../component/reusable/FitnessReuse'
import { useEffect } from 'react'
const Technology = () => {



  
  // const [product,newproduct]=useState([]);
  // useEffect(()=>{
  
  //    fetch("https://fakestoreapi.com/products")
  
  //    .then((response)=>response.json())
  //    .then((response)=>{console.log(response)
  //      newproduct(response)})
  //      .catch((error)=>console.log(error));
  
  
  // },[])
  


  return (
    <div>
    
    <Link to="/tech" className='link'><FitnessReuse   fitnessimg1="https://www.itcilo.org/sites/default/files/styles/fullscreen_image/public/courses/cover-images/A9715955.jpeg?h=fec1bf88&itok=M98l4a73" /></Link>


   <Link to="/tech" className='link'> <FitnessReuse fitnessimg2="https://www.state.gov/wp-content/uploads/2019/04/Science-Technology-shutterstock_449187505.jpg"fitnessimg3="https://sandpipercomms.com/wp-content/uploads/2021/08/shutterstock_1932042689-scaled.jpg" fitnessname="Science, Technology, and Innovation"  fitnessname2="Silence is not golden" /></Link> 
    



  
   <Link to="/tech" className='link'> <FitnessReuse fitnessimg2="https://images01.nicepagecdn.com/page/41/45/website-template-41458.jpg" fitnessname="Modern Technology And Innovation" fitnessimg3="https://images01.nicepagecdn.com/page/46/76/website-template-467680.jpg" fitnessname2="Professional App Development" /></Link>
    {/* <h1 className='heading-product'>Products</h1>

     <div className='main-cart'>
      {
        product.map((item,index)=>{
          return(
           <div className='product' key={index}>
              <div className='cart-box'><img src={item.image} alt="404" className='productimg' /><p>{item.title}</p><h5>PRICE-{item.price}</h5><footer><button className='product-button'>Add To Cart</button></footer><br /> </div>
              </div>
          )
        })
      }</div> */}
    </div>
  )
}

export default Technology