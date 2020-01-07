// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ERAlogo from "../images/logo/era.svg"
import TwitterLogo from "../images/logo/twitter.svg"
import GithubLogo from "../images/logo/github.svg"

const Header = ({ siteTitle }) => (
  <header className="boxed py-4">
    <div className="flex flex-row w-full text-dark font-mono">
      <a href="https://era.eco" target="_blank" rel="noopener noreferrer">
        <ERAlogo />
      </a>
      <div className="flex-grow">&nbsp;</div>
      <a className="px-3" href="/docs">
        Documentation
      </a>
      <a
        className="px-3"
        target="_blank" rel="noopener noreferrer"
        href="https://discordapp.com/channels/612645357850984470/612645357850984473"
      >
        Community
      </a>
      <a className="px-5" href="https://twitter.com/marknadal" target="_blank" rel="noopener noreferrer">
        <TwitterLogo />
      </a>
      <a className="pl-3" href="https://github.com/amark/gun" target="_blank" rel="noopener noreferrer">
        <GithubLogo />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
