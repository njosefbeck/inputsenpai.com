/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ marginTop: '40px' }}>{children}</main>
      <footer>

        <a href="https://join.inputsenpai.com" style={{ color: "#FFF" }}>
        <div style={{
          fontSize: '16px',
          color: '#FFF',
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: '#03a9f4',
          borderRadius: '4px',
          padding: '20px',
          marginBottom: '40px',
        }}>
            Join our newsletter to be notified when we update our resources.
          </div>
        </a>

        <p>© {new Date().getFullYear()}, inputsenpai.com. Created by <a href="https://njosefbeck.com" target="_blank" rel="noopener noreferrer">njosefbeck</a>.</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
