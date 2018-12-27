import React from 'react'
import Link from 'next/link'

const Nav = ({ }) => (
  <React.Fragment>
    <p>Hey!</p>
    <Link href="/">
      <a>Let's go home!</a>
    </Link>
    <Link href="/sell">
      <a>Let's sell!</a>
    </Link>
  </React.Fragment>
)

export default Nav