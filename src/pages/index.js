import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>My first Gatsby Page</h1>
    <p>I just love programming.</p>
    <p>Coding is just awesome.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
