import React, { useState } from 'react'
import Analytics from './Analytics'
import AppHeader from './AppHeader'
import Search from './Search'
import Table from './Table'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { useSelector } from 'react-redux'

const Hom = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  .firstAnimate{
    @media (max-width:480px) {
      display: block;
    }
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: #010214bf;
  }
  .animate{
    @media (max-width:480px) {
      display: block;
    }
    width: 80%;
    padding: 2%;
    box-shadow: 2px 2px 4px #010214a6;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: #a80193;
  }
`
const Card = styled.div`
    width: 20%;
    height: 20vh;
    border-radius: 5px;
    padding: 1%;
    background-color: #fff;
    font-size: 2vw;
    margin-top: 2%;
    color: #a80193;
    display:flex;
    justify-content: center;
    align-items: center;
`
function Home() {
  const [searchVal, setSearchVal] = useState('')

  const [showMenu, setShowMenu]= useState(false)

  const maskTransitions = useTransition(showMenu, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: showMenu,
      delay: 200,
      // config: config.molasses,
      // onRest: () => set(!show),
  })

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(110%)"},
    enter: { opacity: 1, transform: "translateX(100%)" },
    leave: { opacity: 0, transform: "translateX(110%)" },
    reverse: showMenu,
    delay: 200,
      // config: config.molasses,
    // onRest: () => set(!show),
  })

  const showAnalyticTotalGuest = useSelector((state) => state.guest.totalGuest)
  const showAnalyticSignedInGuest = useSelector((state) => state.guest.signedInGuest)
  const showAnalyticSignedOutGuest = useSelector((state) => state.guest.signedOutGuest)

  return (
    <Hom>
      <AppHeader />
      <Search searchVal={searchVal} setSearchVal={setSearchVal}   />
      <Analytics showMenu={showMenu} setShowMenu={setShowMenu}/>
      <Table/>

      {
        maskTransitions(
        (styles, item) => item && <animated.div style={styles} className='firstAnimate' onClick={()=> setShowMenu(false)}>

        </animated.div>
        )
      }

      {
        menuTransitions(
        (styles, item) => item && <animated.div style={styles} className='animate'>
         <Card><p>Total Guest : <b>{showAnalyticTotalGuest}</b></p> </Card> 
         <Card><p>Signed in : <b>{showAnalyticSignedInGuest}</b></p> </Card> 
         <Card><p>Signed Out : <b>{showAnalyticSignedOutGuest}</b></p> </Card> 
        </animated.div>
        )
      }
    </Hom>
  )
}

export default Home