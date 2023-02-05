import React from 'react'
import { Link } from 'react-router-dom'
import HollywoodReuse from '../component/reusable/HollywoodReuse'

const Hollywood = () => {
  return (
    <div>
      <h1 className='page-heading'>
        HollyWood
      </h1>
     <Link  className='link' to="/bollyinfo"><HollywoodReuse imgholly1="https://www.media.hw-static.com/media/2021/06/tomcruise1-web.jpg" imgholly2="https://www.media.hw-static.com/media/2022/01/danielcraigwhite1-web-1024x683.jpeg" imgholly3="https://i0.wp.com/thecitylife.org/wp-content/uploads/2021/02/011_BOSS_ChrisHemsworth_SR21.jpg?fit=1025%2C1536&ssl=1" 
      imgholly4="https://www.mrdustbin.com/en/wp-content/uploads/2021/05/Robert-Downey-Jr..jpg"   hollyname2="Daniel Craig" hollyname1="Tom Curse"  hollyname3="Chris Hemsworth" hollyname4="Robert Downey Jr."/>


      <HollywoodReuse imgholly1="https://www.mrdustbin.com/en/wp-content/uploads/2020/11/Margot-Robbie-768x873.jpg" imgholly2="https://www.hollywoodreporter.com/wp-content/uploads/2022/07/Print-Issue-23A-fea_actress-Daddario-MAIN-GettyImages-1389968186-H-2022.jpg" imgholly3="https://www.mrdustbin.com/en/wp-content/uploads/2020/11/angelina-jolie-1-768x900.jpg" 
      imgholly4="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/canvas/2021/12/07/4cc13a06-dbe9-4adb-b761-3c7c2caf04d8_98f9ca2f.jpg?itok=o7T1SnW-&v=1638870231"   hollyname2="Alexandra Daddario
      " hollyname1="Margot Robbie"  hollyname3="Angelina Jolie" hollyname4="Emma Watson"/>


      <HollywoodReuse imgholly1="https://www.media.hw-static.com/media/2021/06/tomcruise1-web.jpg" imgholly2="https://www.media.hw-static.com/media/2022/01/danielcraigwhite1-web-1024x683.jpeg" imgholly3="https://i0.wp.com/thecitylife.org/wp-content/uploads/2021/02/011_BOSS_ChrisHemsworth_SR21.jpg?fit=1025%2C1536&ssl=1" 
      imgholly4="https://www.mrdustbin.com/en/wp-content/uploads/2021/05/Robert-Downey-Jr..jpg"   hollyname2="Daniel Craig" hollyname1="Tom Curse"  hollyname3="Chris Hemsworth" hollyname4="Robert Downey Jr."/></Link> 
      
      
    </div>
  )
}

export default Hollywood