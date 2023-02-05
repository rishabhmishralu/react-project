import React from 'react'
import "./Reuse.css"
const DataReuse = (props) => {
  return (
    <div>
      <h1 className='page-heading'>Details</h1>
        <div className='view'>
            <div className='main-image'><img src={props.mainimg} alt="" width="100%" /> <p>{props.p}</p></div>
        </div>
    </div>
  )
}

export default DataReuse