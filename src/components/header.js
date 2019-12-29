import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ERAlogo from "../images/logo/era.svg"
import TwitterLogo from "../images/logo/twitter.svg"
import GithubLogo from "../images/logo/github.svg"


const Header = ({ siteTitle }) => (
  <header class="boxed lg:w-960">
    <div class="flex flex-row w-full text-dark font-mono">
      <a href="https://era.eco">
        <ERAlogo />
      </a>
      <div class="flex-grow">&nbsp;</div>
      <a class="px-3" href="/docs">
        Documentation
      </a>
      <a
        class="px-3"
        href="https://discordapp.com/channels/612645357850984470/612645357850984473"
      >
        Community
      </a>
      <a class="px-5" href="https://twitter.com/marknadal">
        <TwitterLogo />
      </a>
      <a
        class="pl-3"
        href="https://github.com/amark/gunhttps://twitter.com/marknadal"
      >
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
