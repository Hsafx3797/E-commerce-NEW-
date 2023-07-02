import React from 'react'
import Herosection from '../components/Herosection'
import { useProductContext } from '../Context/Productcontext'

const About = () => {

  const { myName } = useProductContext();

  const data = { name: " My Ecommerce Store ", }

  return (
    <>
    { myName }
      <Herosection myData= { data } />{" "}
    </>
  )
}

export default About