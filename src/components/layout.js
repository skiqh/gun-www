/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "../components/useBreakpoint"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import "./layout.css"
config.autoAddCss = false


const Layout = ({ children }) => {
	const matchPoints = useBreakpoint()
	return <main className={`${matchPoints.prefersLightMode ? 'prefers-light-mode':''}`}>{children}</main>
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
