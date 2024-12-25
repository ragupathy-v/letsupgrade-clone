import Marquee from 'react-fast-marquee';
import "../style/Marque.css"
import React from 'react'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

function Marque() {

  const data=[
    'Mukul Tiwari has enrolled in GenAI 101 with Pieces',
    'nilima jhapate has enrolled in GenAI 101 with Pieces',
   'SHARMILA. S has enrolled in Postman API Fundamentals Student Expert Certification',
   'jayasri has enrolled in Figma Bootcamp',
   'Arpit  Khare has enrolled in GenAI 101 with Pieces',
   'Sriharsha Reddy has enrolled in Flutter Bootcamp'
  ]
  return (
   <div className="marque-container">
     <Marquee className="d-flex justify-content-center align-items-center p-2" style={{background:"black" }} lo>
        {data.map((text,index)=><p className="pera" key={index}>
         <StarPurple500Icon sx={{marginRight:'5px',}}/>
          {text}
          </p>)}
     </Marquee>  
   </div>
  )
}

export default Marque