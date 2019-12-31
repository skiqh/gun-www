// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GUNlogo from "../images/logo/gun.svg"
import ERAlogo from "../images/logo/era.svg"
import TwitterLogo from "../images/logo/twitter.svg"
import GithubLogo from "../images/logo/github.svg"

import HNlogo from "../images/logo/hackernoon.svg"
import IAlogo from "../images/logo/internetarchive.svg"
import RNNlogo from "../images/logo/royalnetherlandsnavy.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <div class="panel panel-red panel-full-height">
    <div class="tile">
      <header class="boxed py-4">
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
      <div class="inner boxed">
        <GUNlogo style={{ maxWidth: "20rem", minHeight: "10rem" }} alt="" />
        <h2 class="mt-12 text-4xl">
          The database for <br />
          freedom fighters
        </h2>
        <span class="mt-8 text-dark text-xl">
          <FontAwesomeIcon icon={faArrowRight} />
          <a href="##" class="font-mono ml-2">
            Get started
          </a>
        </span>
      </div>
    </div>
    <div class="footer">
      <div class="inner boxed">
        <span class="pr-16 hidden sm:block footerlead">Case studies</span>
        <div class="item w-3/12 sm:w-2/12">
          <HNlogo />
        </div>
        <div class="item w-3/12 sm:w-2/12">
          <IAlogo />
        </div>
        <div class="item w-3/12 sm:w-2/12">
          <RNNlogo />
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
