import React from 'react'
import Nav from './Nav'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.error()
}

const Styled = {
  Logo: styled.h1`
    --header-padding: 0.5rem;
    padding: var(--header-padding) 1rem;
    font-size: 4rem;
    margin: 0;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
      padding: var(--header-padding) 1rem;
      background: ${props => props.theme.red};
      color: ${props => props.theme.grey9};
      text-transform: uppercase;
      text-decoration: none;
    }
    @media (max-width: ${props => props.theme.headerDesktopWidth}) {
      margin: 0;
      text-align: center;
    }
  `,
  Header: styled.header`
    .bar {
      border-bottom: 0.5rem solid ${props => props.theme.grey1};
      display: flex;
      flex-direction: column;
      align-items: stretch;

      @media(min-width: ${props => props.theme.headerDesktopWidth}) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }
    }
    .sub-bar {
      display: flex;
      border-bottom: 0.05rem solid ${props => props.theme.grey7};
    }
  `
}

const Header = ({ }) => (
  <Styled.Header>
    <div className="bar">
      <Styled.Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </Styled.Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>
      Cart
    </div>
  </Styled.Header>
)

export default Header