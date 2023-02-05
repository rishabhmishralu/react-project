import React from 'react'
import { Link } from 'react-router-dom'
import "./Reuse.css"
const BollyReuse = (props) => {
  return (
    <>
        <div className='bollywood'>
         <div className='bolly'><h1 style={{textAlign:"center"}}>{props.bollywood} </h1><br /><div className="bolly-response"><Link to="/kgf"><img src={props.img} alt="" className='img1'  /></Link><div></div><div className='breif'><h3>{props.heading}</h3><p>{props.bollywoodpara}</p></div></div><hr /></div>
            <div className='post'> <h1 style={{textAlign:"center"}}>{props.posts}</h1> <br /><div className='toppost'><div><img src={props.hero} alt="" className='postimg' /> <p>{props.para}</p><hr /></div></div> </div>
        </div>
    </>
  )
}

export default BollyReuse