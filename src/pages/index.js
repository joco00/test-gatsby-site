import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Temp Home Page.</p>
      <StaticImage
        alt="Selfie at the Grand Canyon of Yellow Stone"
        src="../images/grandCanyonYellowStone.jpeg"
      />
    </Layout>
  )
}

export default IndexPage