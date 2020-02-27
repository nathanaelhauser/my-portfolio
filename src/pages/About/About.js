import React, { useContext } from 'react'
import PlainAbout from '../../components/PlainAbout'
import AnimatedAbout from '../../components/AnimatedAbout'
import PagesContext from '../../utils/PagesContext'
import profilePicture from './images/profile-pic.jpg'

const About = () => {
  const { aboutVisited } = useContext(PagesContext)

  return (aboutVisited ? <PlainAbout picture={profilePicture} /> : <AnimatedAbout picture={profilePicture} />)
}

export default About