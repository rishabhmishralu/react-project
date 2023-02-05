import React from 'react'
import { Link } from 'react-router-dom'
import FoodReuse from '../component/reusable/FoodReuse'
const Food = () => {




  return (
    <>
    
    <h1 className='page-heading' >FooD</h1>
    <div>
 
    <Link className='link' to="/burger"> <FoodReuse img1="https://b.zmtcdn.com/data/pictures/chains/3/19165593/1edc341a1cb0b7bd57c812b93e6ce333_o2_featured_v2.jpg?output-format=webp" img2="https://b.zmtcdn.com/data/pictures/chains/3/800363/c708fcdb888abd4f493c0fdc67ac766e_o2_featured_v2.jpg?output-format=webp" img3="https://b.zmtcdn.com/data/pictures/chains/6/800126/b60f4031c5e0eaa1e7f6cbc31e02fbdf_o2_featured_v2.jpg"
      heading="Burger King" manali="Pizza Hut" kasol="KFC"    /> </Link>
      
    <FoodReuse img1="https://b.zmtcdn.com/data/pictures/chains/2/19926822/48422c1fa80705356d854dd0219a5485_o2_featured_v2.jpg" img2="https://b.zmtcdn.com/data/pictures/3/18698153/e846d30cc2320745535f5abae681ebf3_o2_featured_v2.jpg" img3="https://b.zmtcdn.com/data/pictures/2/20352432/d10e7eac0624c24c7572f06a213d4a9b_o2_featured_v2.jpg" heading="Thali Centre" manali="Siraj Restaurent" kasol="Binze 
    Cake" />
  
   
     
  
    </div>
    </>
  )
}

export default Food