
import React from 'react'
import "../../style/Intro.css"
import Marquee from 'react-fast-marquee'
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Banner from './Banner';

function Intro() {
  return (
    <div id='lntro-container' className="  position-relative d-flex flex-column align-items-center ">
        <div >
            <h1 className="intro-h1  ">Future Proof Your</h1>
            <h1 className="intro-h1  mb-5">Career With<span className='intro-span'> LetsUpgrade</span></h1>
        </div>
        <div>
            <p className="intro-p-1  text-center ">Explore Tech, Design, Management, Business, 
                Product and Data with LetsUpgrade.
                Learn directly from top Industry experts
            </p>
        </div>
        <div className="intro-marquee position-absolute ">
            <Marquee>LEARN BUILD SHARE GROW</Marquee>
        </div>
        <div>
            <p className="intro-p-2">
                <LiveTvSharpIcon fontSize='small' sx={{color:'red'}}/>  live class  
                |  <VerifiedOutlinedIcon fontSize='small' color='primary'/>  get cretified 
                |  <CurrencyRupeeOutlinedIcon fontSize='small' sx={{color:'rgb(34 197 94)'}}/> free program
            </p>
        </div>
        <div className="banner-section">
           <Banner/>
        </div>
       
    </div>
  )
}

export default Intro