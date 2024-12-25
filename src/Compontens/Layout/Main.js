import React from 'react'

import "../../style/Main.css"
import Marque from '../Marquee'
import Intro from '../MainLayout/Intro'
import Certivicateprogram from '../MainLayout/Certivicateprogram'
import Collages from '../MainLayout/Collages'

function Main() {
  return (
    <section id='main' >
            <Marque/>
            <Intro/>
           <Certivicateprogram/>
           <Collages/>
    </section>
  )
}

export default Main