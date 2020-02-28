import PropTypes from "prop-types"
import React from "react"
import ERAlogo from "../images/logo/era.svg"
import TwitterLogo from "../images/logo/twitter.svg"
import GithubLogo from "../images/logo/github.svg"

const Header = ({ siteTitle }) => (
	<header className="lg:w-box lg:mx-auto px-6 lg:px-0 py-4">
		<div className="flex flex-row items-center w-full text-dark font-mono text-sm sm:text-base">
			<a
				href="https://era.eco"
				className="h-8 w-8 md:h-12 md:w-12"
				target="_blank"
				rel="noopener noreferrer"
			>
				<ERAlogo />
			</a>
			<div className="flex-grow">&nbsp;</div>
			<a className="p-1 sm:p-2 mx-1 sm:mx-3" href="/docs">
				Docs
			</a>
			<a
				href="http://chat.gun.eco/"
				className="p-1 sm:p-2 mx-1 sm:mx-3"
				target="_blank"
				rel="noopener noreferrer"
			>
				Community
			</a>
			<a
				href="https://twitter.com/marknadal"
				className="p-1 sm:p-2 mx-1 sm:mx-2 h-8 w-8 sm:h-10 sm:w-10"
				target="_blank"
				rel="noopener noreferrer"
			>
				<TwitterLogo />
			</a>
			<a
				href="https://github.com/amark/gun"
				className="p-1 sm:p-2 ml-1 sm:ml-2 sm:ml-3 h-8 w-8 sm:h-10 sm:w-10"
				target="_blank"
				rel="noopener noreferrer"
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
