import React, { useContext } from 'react'
import PagesContext from '../../utils/PagesContext'
import PlainHome from '../../components/PlainHome'
import AnimatedHome from '../../components/AnimatedHome'

const Home = () => {
  const { homeVisited } = useContext(PagesContext)

  return (homeVisited ? <PlainHome /> : <AnimatedHome />)
}

export default Home