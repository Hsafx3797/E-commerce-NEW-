import React from 'react'
import FeatureProduct from '../components/FeatureProduct';
// import styled from 'styled-components'
import Herosection from '../components/Herosection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {

  const data = { name: " My Trade Store ", }

  return (
    <>
    <Herosection myData= { data }/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>

    </>
  )
}

// const Wrapper = styled.section`
// height:100vh;
// `;

export default Home