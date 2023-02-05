import React from 'react'

const FoodReuse = (props) => {
  return (
    <>
    
       
        <div className='main-1'>
         <div className='box-1'><img src={props.img1} alt="404" className='img1' /> <h4 className='heading-box-1'>{props.heading}</h4></div> 
         <div className='box-1'><img src={props.img2} alt="404" className='img1'/> <h4 className='heading-box-1'>{props.manali}</h4></div>
         <div className='box-1'><img src={props.img3} alt="404" className='img1'/> <h4 className='heading-box-1'>{props.kasol}</h4></div> 
        </div>
  
       <hr />
      
   </>
  )
}

export default FoodReuse