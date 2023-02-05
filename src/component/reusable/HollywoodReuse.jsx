import React from 'react'

const HollywoodReuse = (props) => {
  return (
    <div>
        <div className='hollywood'>
            <div><img src={props.imgholly1} alt="404" width="30%" className='hollyimg' /><h3>{props.hollyname1}</h3></div>
            <div><img src={props.imgholly2} alt="404" width="30%" className='hollyimg'/><h3>{props.hollyname2}</h3></div>
            <div><img src={props.imgholly3} alt="404" width="30%" className='hollyimg'/><h3>{props.hollyname3}</h3></div>
            <div><img src={props.imgholly4} alt="404" width="30%" className='hollyimg'/><h3>{props.hollyname4}</h3></div>
        </div>
      
        
    </div>
  )
}

export default HollywoodReuse