import brown from "@material-ui/core/colors/brown"
import lightBlue from "@material-ui/core/colors/lightBlue"
import { createMuiTheme } from "@material-ui/core/styles"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: lightBlue
  }
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MuiThemeProvider theme={theme}>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} Jesse Hallett, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </MuiThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
