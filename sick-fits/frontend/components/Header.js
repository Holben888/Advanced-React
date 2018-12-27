import React from 'react'
import Nav from './Nav'

const Header = ({ }) => (
  <React.Fragment>
    <div className="bar">
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>
      Cart
    </div>
  </React.Fragment>
)

export default Header