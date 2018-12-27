import React from 'react'
import Header from './Header' 
import Meta from './Meta'

const Page = ({ children }) => (
  <React.Fragment>
    <Meta />
    <Header />
    <p>Hey I'm the page component!</p>
    {children}
  </React.Fragment>
)

export default Page