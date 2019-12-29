/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GUNlogo from "../images/logo/gun.svg"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div class="panel panel-red panel-full-height">
        <div class="tile">
          <Header />
          <GUNlogo style={{ maxWidth: "20rem" }} />
        </div>
        <div class="footer">
          <div class="boxed lg:w-960">
            <span>Case studies</span>
          </div>
        </div>
      </div>

      <main class="boxed lg:w-960 py-12">{children}</main>

      <footer class="boxed lg:w-960">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
