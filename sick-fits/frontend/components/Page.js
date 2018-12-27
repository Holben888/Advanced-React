import React from 'react'
import Header from './Header'
import Meta from './Meta'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
  red: '#FF0000',
  grey1: 'hsla(0, 0%, 15%, 1)',
  grey7: 'hsla(0, 0%, 70%, 1)',
  grey8: 'hsla(0, 0%, 85%, 1)',
  grey9: 'hsla(0, 0%, 95%, 1)',
  maxWidth: '1000px',
  headerDesktopWidth: '1000px'
}

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'radnika_next';
    font-size: 1.4rem;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: ${theme.grey1};
  }
`

const Styled = {
  Page: styled.div`
    color: ${props => props.theme.grey1};
  `,
  Inner: styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
  `
}

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Styled.Page>
      <Meta />
      <Header />
      <Styled.Inner>
        {children}
      </Styled.Inner>
    </Styled.Page>
  </ThemeProvider>
)

export default Page