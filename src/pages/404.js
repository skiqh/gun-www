import React from "react"
import { useEffect, useState } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { BreakpointProvider, useBreakpoint } from "../components/useBreakpoint"

import LogoTwitter from "../images/logo/twitter.svg"
import LogoGithub from "../images/logo/github.svg"
import LogoDiscord from "../images/logo/discord.svg"
import LogoGUN from "../images/logo/gun.svg"
import LogoERA from "../images/logo/era.svg"

import IconNight from "../images/icons/night.svg"
import IconDay from "../images/icons/day.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faArrowRight,
	faHeart,
} from "@fortawesome/free-solid-svg-icons"


const queries = {
	xs: "(max-width: 320px)",
	sm: "(min-width: 321px) and (max-width: 640px)",
	md: "(min-width: 641px) and (max-width: 768px)",
	lg: "(min-width: 769px) and (max-width: 1024px)",
	xl: "(min-width: 1025px) and (max-width: 1280px)",
	xxl: "(min-width: 1281px)",
	prefersLightMode: "(prefers-color-scheme: light)",
}

const NotfoundPage = () => {

	const matchPoints = useBreakpoint()
	const [theme, set_theme] = useState(
		matchPoints.prefersLightMode ? "light" : "dark"
	)
	console.log(`matchPoints`, matchPoints, theme)

	const changeTheme = () => {
		set_theme(theme === "dark" ? "light" : "dark")
	}

	useEffect(() => {
		window.document.body.classList.toggle("themed", theme === "dark" || theme === "light")
		window.document.body.classList.toggle("theme-dark", theme === "dark")
		window.document.body.classList.toggle("theme-light", theme === "light")
		window.document.body.classList.toggle("size-xs", matchPoints.xs)
		window.document.body.classList.toggle("size-sm", matchPoints.sm)
		window.document.body.classList.toggle("size-md", matchPoints.md)
		window.document.body.classList.toggle("size-lg", matchPoints.lg)
		window.document.body.classList.toggle("size-xl", matchPoints.xl)
		window.document.body.classList.toggle("size-xxl", matchPoints.xxl)
	}, [theme, matchPoints])

	return (
		<Layout>
			<SEO />
			{/* <SEO title="GUN — the database for freedom fighters" /> */}
			<div className="panel panel-red panel-full-height">
				<div className="tile">
					<header className="lg:w-box lg:mx-auto px-6 lg:px-0 py-4">
						<div className="flex flex-row items-center w-full text-dark font-mono text-sm sm:text-base">
							<a
								href="https://era.eco"
								className="h-8 md:h-12 w-8 md:w-12"
								target="_blank"
								rel="noopener noreferrer"
							>
								<LogoERA />
							</a>
							<div className="flex-grow">&nbsp;</div>
							<a
								className="p-1 sm:p-2 mx-1 sm:mx-3"
								href="https://gun.eco/docs/"
							>
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
								<LogoTwitter />
							</a>
							<a
								href="https://github.com/amark/gun"
								className="p-1 sm:p-2 mx-1 sm:mx-2 sm:mx-3 h-8 w-8 sm:h-10 sm:w-10"
								target="_blank"
								rel="noopener noreferrer"
							>
								<LogoGithub />
							</a>
							<button
								className="scheme-switcher-wrapper p-1 sm:p-2 h-8 md:h-12 w-12 sm:w-14"
								onClick={changeTheme}
							>
								<IconNight />
								<IconDay />
							</button>
						</div>
					</header>
					<div className="inner lg:w-box lg:mx-auto px-6 lg:px-0">
						<LogoGUN style={{ maxWidth: "5rem", minHeight: "3rem" }} alt="" />
						<h2 className="mt-12 text-2xl sm:text-4xl">
							404 &mdash; page not found
						</h2>
						<span className="mt-8 text-dark text-xl">
							<a href="https://gun.eco/">
								<FontAwesomeIcon icon={faArrowRight} />
								<span className="font-mono ml-2">Go to GUN's main site</span>
							</a>
						</span>
					</div>
				</div>
				<div className="footer community-links">
					<div className="inner lg:w-box lg:mx-auto px-6 lg:px-0">
						<span className="pr-16 hidden md:block footerlead">Join us!</span>
						<a
							href="https://twitter.com/databasegun"
							target="_blank"
							rel="noopener noreferrer"
							className="item"
						>
							<div className="text-sm">
								<LogoTwitter />
							</div>
							<span className="hidden sm:w-3/12 text-xxs sm:block lg:text-xs">
								Follow GUN on Twitter
							</span>
						</a>
						<a
							href="https://github.com/amark/gun"
							target="_blank"
							rel="noopener noreferrer"
							className="item"
						>
							<div className="text-sm">
								<LogoGithub />
							</div>
							<span className="hidden sm:w-3/12 text-xxs sm:block lg:text-xs">
								Star GUN on Github
							</span>
						</a>
						<a
							href="http://chat.gun.eco/"
							target="_blank"
							rel="noopener noreferrer"
							className="item"
						>
							<div className="text-sm">
								<LogoDiscord />
							</div>
							<span className="hidden sm:w-3/12 text-xxs sm:block lg:text-xs">
								Join our Discord
							</span>
						</a>
					</div>
				</div>
			</div>

			<div className="lg:w-box lg:mx-auto px-6 lg:px-0 h-16"></div>

			<div className="panel panel-pink" id="panel-links">
				<div className="tile py-air">
					<div className="flex flex-col md:flex-row items-start justify-between lg:w-box lg:mx-auto px-6 lg:px-0">
						<div className="item mb-6 md:mb-0">
							<h2 className="mb-1 md:mb-4 text-sm md:text-lg lg:text-xl">
								Concepts
							</h2>
							<ul className="font-mono text-dark md:text-xs lg:text-sm">
								<li>
									<a
										href="https://gun.eco/docs/Hypothetical-Amnesia-Machine"
										target="_blank"
										rel="noopener noreferrer"
									>
										HAM — Conflict resolution
									</a>
								</li>
								<li>
									<a
										href="https://gun.eco/docs/SEA"
										target="_blank"
										rel="noopener noreferrer"
									>
										SEA — Security &amp; encryption
									</a>
								</li>
								<li>
									<a
										href="https://gun.eco/docs/RAD"
										target="_blank"
										rel="noopener noreferrer"
									>
										RAD — Storage data structure
									</a>
								</li>
								<li>
									<a
										href="https://gun.eco/docs/DAM"
										target="_blank"
										rel="noopener noreferrer"
									>
										DAM — Mesh netwoking
									</a>
								</li>
								<li>
									<a
										href="https://gun.eco/docs/AXE"
										target="_blank"
										rel="noopener noreferrer"
									>
										AXE — Incentivised transfer
									</a>
								</li>
								<li>
									<a
										href="https://gun.eco/docs/DHT"
										target="_blank"
										rel="noopener noreferrer"
									>
										DHT — Finding content
									</a>
								</li>
								<li>
									<a
										href="https://gun.eco/docs/CAP-Theorem"
										target="_blank"
										rel="noopener noreferrer"
									>
										CAP — Database tradeoffs
									</a>
								</li>
								<li>
									<a
										href="https://github.com/amark/gun/wiki/DAP-Theorem"
										target="_blank"
										rel="noopener noreferrer"
									>
										DAP — Distributed system limits
									</a>
								</li>
							</ul>
						</div>
						<div className="item mb-6 md:mb-0">
							<h2 className="mb-1 md:mb-4 text-sm md:text-lg lg:text-xl">
								Links
							</h2>
							<ul className="font-mono text-dark md:text-xs lg:text-sm">
								<li>
									<a
										href="https://gun.eco/docs/FAQ"
										target="_blank"
										rel="noopener noreferrer"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href="https://gun.eco/docs"
										target="_blank"
										rel="noopener noreferrer"
									>
										Docs
									</a>
								</li>
								<li>
									<a
										href="https://github.com/amark/gun"
										target="_blank"
										rel="noopener noreferrer"
									>
										Github
									</a>
								</li>
								<li>
									<a
										href="https://github.com/amark/gun/issues"
										target="_blank"
										rel="noopener noreferrer"
									>
										Issues
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/databasegun"
										target="_blank"
										rel="noopener noreferrer"
									>
										Twitter
									</a>
								</li>
								<li>
									<a
										href="http://chat.gun.eco/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Discord
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/channel/UCQAtpf-zi9Pp4__2nToOM8g"
										target="_blank"
										rel="noopener noreferrer"
									>
										Youtube
									</a>
								</li>
							</ul>
						</div>
						<div className="item mb-6 md:mb-0">
							<h2 className="mb-1 md:mb-4 text-sm md:text-lg lg:text-xl">
								Explainer Videos
							</h2>
							<ul className="font-mono text-dark md:text-xs lg:text-sm">
								<li>
									<a
										href="https://www.youtube.com/watch?v=UBnkhpcLQuM"
										target="_blank"
										rel="noopener noreferrer"
									>
										Chronological ordering
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=jXni0KDQNsc"
										target="_blank"
										rel="noopener noreferrer"
									>
										Proof of work
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=tg06mdcGs5k"
										target="_blank"
										rel="noopener noreferrer"
									>
										Digital signature
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=ccKThyaDR30"
										target="_blank"
										rel="noopener noreferrer"
									>
										Data security
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=_RDC37hrTo8"
										target="_blank"
										rel="noopener noreferrer"
									>
										Crypto
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/channel/UCQAtpf-zi9Pp4__2nToOM8g"
										target="_blank"
										rel="noopener noreferrer"
									>
										more ...
									</a>
								</li>
							</ul>
						</div>
						<div className="item ">
							<h2 className="mb-1 sm:mb-4 text-sm md:text-lg lg:text-xl">
								Technical Videos
							</h2>
							<ul className="font-mono text-dark md:text-xs lg:text-sm">
								<li>
									<a
										href="https://www.youtube.com/watch?v=neqz5t4FSJI"
										target="_blank"
										rel="noopener noreferrer"
									>
										Conflict resolution algorithm
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=ik_dqXBMBHw"
										target="_blank"
										rel="noopener noreferrer"
									>
										User accounts with SEA
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=fG9Xjt3mZ5U&t=11s"
										target="_blank"
										rel="noopener noreferrer"
									>
										Implementing lists in GUN
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer">
					<div className="inner lg:w-box lg:mx-auto px-6 lg:px-0">
						<div className="footericon text-4xl">
							<FontAwesomeIcon icon={faHeart} />
						</div>
						<div className="text-xs ml-4">
							Made with love by the ERA team, and many very awesome
							contributors. <br />
							Liberally licensed under Zlib or MIT or Apache 2.0
						</div>
						<div className="flex-grow"></div>
					</div>
				</div>
			</div>

			<div className="lg:w-box lg:mx-auto px-6 lg:px-0 h-16"></div>
		</Layout>
	)
}

export default () => (
	<BreakpointProvider queries={queries}>
		<NotfoundPage />
	</BreakpointProvider>
)
