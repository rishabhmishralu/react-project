import React from 'react'
import { Link } from 'react-router-dom'

const FitnessReuse = (props) => {
  return (
    <div>
        <div>
          <img src={props.fitnessimg1} alt="" width="100%" />
        </div>
        <br />
        <div className='fitness-box-2'>
         <Link className='link' to="/fitnessinfo"> <div><img src={props.fitnessimg2} alt="" className='fitness-2 ' /><h2>{props.fitnessname}</h2></div> 
          <div><img src={props.fitnessimg3} alt="" className='fitness-2' /><h2>{props.fitnessname2}</h2></div> 
          </Link> 
        </div>
    </div>
  )
}

export default FitnessReuse