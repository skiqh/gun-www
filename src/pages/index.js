import React from "react"
import { useEffect, useRef } from "react"
// import { Link } from "gatsby"
// import Prism from "prismjs"
import Hyphenated from "react-hyphen"
import { CopyToClipboard } from "react-copy-to-clipboard"

import scrollTo from "gatsby-plugin-smoothscroll"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"

import NBCcover from "../images/cover/nbcnews.jpg"
import Nordiccover from "../images/cover/nordicjs.jpg"

import NBClogo from "../images/logo/nbc.svg"
// import HackerNewsLogo from "../images/logo/hackernews.svg"
import TechCrunchLogo from "../images/logo/techcrunch.svg"
import CoinDeskLogo from "../images/logo/coindesk.svg"
import TwitterLogo from "../images/logo/twitter.svg"
import GithubLogo from "../images/logo/github.svg"
import DiscordLogo from "../images/logo/discord.svg"
import GUNlogo from "../images/logo/gun.svg"
import HackerNoonLogo from "../images/logo/hackernoon.svg"
import InternetArchiveLogo from "../images/logo/internetarchive.svg"
import RoyalNetherlandsNavyLogo from "../images/logo/royalnetherlandsnavy.svg"
import ChangelogLogo from "../images/logo/changelog.svg"

import * as tailwindconfig from "../../tailwind.config"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRight,
  faHeart,
  faCopy,
} from "@fortawesome/free-solid-svg-icons"
import VideoPanel from "../components/video-panel"
import Dots from "../components/dots"

// require("prismjs/themes/prism-solarizedlight.css")

const themecolors = tailwindconfig.theme.extend.colors

const code_sea = `const Me = gun.user()
const Barry = gun.user(barrys_pub_key)

Me.auth('Larry', 'h4x0r-Llama-123', ret => {
  if(ret.err)
    return console.error('auth failed: ', ret.err)
  // let Barry read what I want for my birthday
  Me.get('secret-birthday-wish').grant(Barry)
})`

const code_graph = `const Larry = gun.get('larry').put({name: 'Larry'})
const Barry = gun.get('barry').put({name: 'Barry'})

Larry.get('bff').put(Barry)
Barry.get('bff').put(Larry)

// goin from Larry to his BFF's BFF
Larry.path('bff.bff.name').once(name => {
  console.log(name) // -> Larry
})`

const code_realtime = `// on your device
navigator.geolocation.watchPosition(position => {
  gun.get('coords').put(position.coords)
})

// in your app
gun.get('coords').on(coords => {
    map.dot.move(coords.latitude, coords.longitude)
})`

const code_browser_a = `// First, connect to the peer you started above
const gun = Gun({ peers: ['http://127.0.0.1:8765/gun'] })

// Then make the browser regularly update the db
setInterval(() => {
  gun.get('bob').get('heartbeat').put(Date.now())
}, 1000)`

const code_browser_b = `// In a second browser, connect to the same peer
const gun = Gun({ peers: ['http://127.0.0.1:8765/gun'] })

// And listen to the heartbeat updates in real-time
gun.get('bob').get('heartbeat').on(heartbeat => {
  // Assume the other clock is reasonably in sync :-P
  const diff = Date.now() - heartbeat
  console.log(\`Bob's heartbeat traveled \${diff} ms\`)
})`

const IndexPage = () => {
  const dweb = useRef(null)
  // const hashes = []

  useEffect(() => {
    // window.history.pushState(
    //   { y: 0 },
    //   "",
    //   "#top"
    // )
    // window.history.scrollRestoration = 'auto'
    // window.onpopstate = function(event) {
    //   console.log(
    //     "location: " +
    //       document.location +
    //       ", state: " +
    //       JSON.stringify(event.state),
    //     window.history.scrollRestoration
    //   )
    //   if(event.state && event.state.scrollY) {
    //     console.log('scrolling smoothly to ', event.state.scrollY, event)
    //     window.history.replaceState({ scrollY: document.body.scrollTop }, "", 'location')
    //     // event.preventDefault()
    //     window.scroll({
    //       top: event.state.scrollY,
    //       left: 0,
    //       behavior: "smooth",
    //     })
    //   }
    // }
    // call the highlightAll() function to style our code blocks
    // Prism.highlightAll()
  })

  // const onpushstate = (id) => {
  //   window.history.pushState({ y: document.body.scrollTop }, "", `#${id}`)
  //   scrollTo(`#${id}`)
  // }
  const scroll = id => {
    return () => {
      console.log(`go to ${id}`)
      scrollTo(`#${id}`)
    }
    // return () => onpushstate(id)
  }
  // window.onpopstate = (event) => {
  //   console.log(`onpopstate`, event)
  // }
  // window.onpopstate = (event) => {
  //     const hash = event.state // hashes[0]
  //     if (hash && hash.y && window.location.hash !== hash.hash) {
  //         // window.history.State({ y: document.body.scrollTop }, "", `#${id}`)
  //         window.scroll({ x: 0, y: hash.y })
  //     }
  // }
  // window.history.scrollRestoration = "manual"

  return (
    <Layout>
      <SEO title="Home" />
      <div className="panel panel-red panel-full-height">
        <div className="tile">
          <Header />
          <div className="inner lg:w-box lg:mx-auto px-6 lg:px-0">
            <GUNlogo style={{ maxWidth: "20rem", minHeight: "10rem" }} alt="" />
            <h2 className="mt-12 text-4xl">
              The database for <br />
              freedom fighters
            </h2>
            <span className="mt-8 text-dark text-xl">
              <FontAwesomeIcon icon={faArrowRight} />
              <button
                onClick={scroll("guninfiveminutes")}
                className="font-mono ml-2"
              >
                Get started
              </button>
            </span>
          </div>
        </div>
        <div className="footer">
          <div className="inner lg:w-box lg:mx-auto px-6 lg:px-0">
            <span className="pr-16 hidden sm:block footerlead">Used by</span>
            <a
              href="https://www.hackernoon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="item w-3/12 sm:w-2/12"
            >
              <HackerNoonLogo />
            </a>
            <a
              href="https://archive.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="item w-3/12 sm:w-2/12"
            >
              <InternetArchiveLogo />
            </a>
            <div className="item w-3/12 sm:w-2/12">
              <RoyalNetherlandsNavyLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-box lg:mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row my-air md:items-center lg:items-start">
          <div className="order-3 lg:order-1 w-full md:w-8/12 lg:w-1/2">
            <h2>Get ready to disrupt Big Tech</h2>
            <p>
              GUN gives you the most powerful weapons of the internet —{" "}
              <button onClick={scroll("decentralization")}>
                decentralization
              </button>{" "}
              and <button onClick={scroll("privacy")}>real privacy</button> — to
              reclaim the web and make it truly free and open.
            </p>
            <div className="links">
              <button onClick={scroll("guninfiveminutes")}>
                <FontAwesomeIcon icon={faArrowRight} />
                Get up and running with GUN in five minutes or less
              </button>
              <button
                onClick={() =>
                  dweb &&
                  dweb.current &&
                  dweb.current.play &&
                  dweb.current.play()
                }
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Watch GUN's author share his vision for the web
              </button>
            </div>
          </div>

          <div className="order-2 h-12 lg:h-auto flex-grow-0 lg:flex-grow"></div>

          <div className="order-1 lg:order-3 w-full md:w-8/12 lg:w-smallcol">
            <VideoPanel
              ref={dweb}
              url="https://www.youtube.com/watch?v=ZF7a5oj77-U"
              cover={NBCcover}
              footerText="GUN author Mark Nadal on why he is building a decentralized web, and what it looks like."
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mb-air md:items-center lg:items-start">
          <div className="w-full md:w-8/12 lg:w-smallcol">
            <VideoPanel
              url="https://www.youtube.com/watch?v=5fCPRY-9hkc"
              cover={Nordiccover}
              footerText="Mark Nadal at Nordic.js 2017 - The Design and Evolution of Event-Driven Databases"
            />
          </div>

          <div className="h-12 lg:h-auto flex-grow-0 lg:flex-grow"></div>

          <div className="w-full md:w-8/12 lg:w-1/2">
            <h2>Powerful and flexible</h2>
            <p>
              <Hyphenated>
                GUN is a database engine that runs everywhere JavaScript does —{" "}
                <a
                  href="https://gun.eco/docs/Installation#browser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  browsers
                </a>
                ,{" "}
                <a
                  href="https://gun.eco/docs/React-Native"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mobile devices
                </a>{" "}
                and{" "}
                <a
                  href="https://gun.eco/docs/Installation#server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  servers
                </a>
                , allowing you to build exactly the data system you want.
              </Hyphenated>
            </p>
            <div className="links">
              <a
                href="https://gun.eco/docs/Awesome-GUN#framework-integrations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Learn how to add GUN to an existing React oder Svelte app
              </a>
              <a
                href="https://github.com/skiqh/gun-cli#example-creating-a-redundant-mesh-network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Build a distributed &amp; fault tolerant data delivery system
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="panel panel-yellow" id="decentralization">
        <div className="tile py-air">
          <div className="lg:w-box lg:mx-auto px-6 lg:px-0">
            <h3>10 Million users and counting</h3>
            <h2>
              <Hyphenated>
                GUN is powering decentralized platforms with millions of users
                and vastly different requirements on a shoestring budget.
              </Hyphenated>
            </h2>
            <div className="links">
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                How HackerNoon handles 10M+ users on one free Heroku dyno
              </a>
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Decentralizing the Internet Archive with lots of GUNs
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="inner lg:w-box lg:mx-auto px-6 lg:px-0">
            <span className="pr-16 hidden sm:block footerlead">
              GUN in the news
            </span>
            <a
              href="https://www.nbcnews.com/video/building-a-new-internet-the-bold-plan-to-decentralize-the-web-63742021851"
              target="_blank"
              rel="noopener noreferrer"
              className="item w-2/12 h-6 sm:w-1/9 sm:h-10"
            >
              <NBClogo />
            </a>
            <a
              href="https://techcrunch.com/2018/05/23/gun-raises-more-than-1-5m-for-its-decentralized-database-system/"
              target="_blank"
              rel="noopener noreferrer"
              className="item w-2/12 h-6 sm:w-1/9 sm:h-10"
            >
              <TechCrunchLogo />
            </a>
            <a
              href="https://changelog.com/podcast/236"
              target="_blank"
              rel="noopener noreferrer"
              className="item w-4/12 h-6 sm:w-1/9 sm:h-10"
            >
              <ChangelogLogo />
            </a>
            <a
              href="https://www.coindesk.com/bitcoins-second-developer-returning-crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="item w-4/12 h-4 sm:w-1/9 sm:h-10"
            >
              <CoinDeskLogo />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-box lg:mx-auto px-6 lg:px-0" id="privacy">
        <div className="flex flex-col lg:flex-row my-air md:items-center lg:items-start">
          <div className="order-3 lg:order-1 w-full md:w-8/12 lg:w-1/2">
            <h2>Decentralized auth built-in</h2>
            <p>
              <Hyphenated>
                GUN's{" "}
                <a
                  href="https://gun.eco/docs/SEA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  security module
                </a>{" "}
                is built on strong encryption standards and works completely
                decentralized. In other words — real privacy with no single
                point of failure.
              </Hyphenated>
            </p>
            <div className="links">
              <a
                href="https://gun.eco/docs/User"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Learn how to securely store and exchange user data
              </a>
              <a
                href="https://gun.eco/converse.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Build a multi-user chat with e2e encryption
              </a>
            </div>
          </div>

          <div className="order-2 h-12 lg:h-auto flex-grow-0 lg:flex-grow"></div>

          <div className="order-1 lg:order-3 w-full md:w-8/12 lg:w-smallcol">
            <a
              href="https://gun.eco/docs/SEA"
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-small panel-pink"
            >
              <div className="tile code">
                <Dots
                  a={themecolors.blue}
                  b={themecolors.cyan}
                  c={themecolors.yellow}
                />
                <pre className="language-js">{code_sea}</pre>
              </div>
              <div className="footer">
                <div className="inner">
                  <div className="footericon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className="ml-3">
                    Read more about SEA, GUN's built-in module for Security,
                    Encryption and Authentication
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mb-air md:items-center lg:items-start">
          <div className="w-full md:w-8/12 lg:w-smallcol">
            <a
              href="https://gun.eco/docs/Graph-Guide"
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-yellow panel-small"
            >
              <div className="tile code">
                <Dots a={themecolors.purple} b={themecolors.pink} />
                <pre className="language-js">{code_graph}</pre>
              </div>
              <div className="footer">
                <div className="inner">
                  <div className="footericon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className="ml-3">
                    Learn how to create, traverse, index and query linked data
                    in GUN
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="h-12 lg:h-auto flex-grow-0 lg:flex-grow"></div>

          <div className="w-full md:w-8/12 lg:w-1/2">
            <h2>Graph data for the win</h2>
            <p>
              <Hyphenated>
                GUN's{" "}
                <a
                  href="https://gun.eco/docs/Graph-Guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  graph data model
                </a>{" "}
                allows you to use intuitive data structures and queries, while
                still being capable of doing{" "}
                <a
                  href="https://gun.eco/docs/Performance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  20M+ API ops/sec
                </a>{" "}
                in just ~9KB gzipped size.
              </Hyphenated>
            </p>
            <div className="links">
              <a
                href="https://gun.eco/docs/Simple-introduction-to-graph-data-structures"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Read more about GUN's graph data structure
              </a>
              <a
                href="https://github.com/brysgo/graphql-gun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Query a GUN database with GraphQL
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row my-air md:items-center lg:items-start">
          <div className="order-3 lg:order-1 w-full md:w-8/12 lg:w-1/2">
            <h2>Respond in real-time</h2>
            <p>
              <Hyphenated>
                Any remote updates to the data you subscribe to will be
                automatically propagated through the network, so you can react
                to changes as they happen.
              </Hyphenated>
            </p>
            <div className="links">
              <a
                href="https://gun.eco/docs/Service-Discovery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Learn how GUN peers find and talk to each other
              </a>
              <a
                href="https://www.youtube.com/watch?v=5fCPRY-9hkc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Watch GUN's author implement its sync algorithm from scratch
              </a>
            </div>
          </div>

          <div className="order-2 h-12 lg:h-auto flex-grow-0 lg:flex-grow"></div>

          <div className="order-1 lg:order-3 w-full md:w-8/12 lg:w-smallcol">
            <a
              href="https://github.com/skiqh/gun-cli#example-creating-a-redundant-mesh-network"
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-small panel-blue"
            >
              <div className="tile code">
                <Dots a={themecolors.pink} />
                <pre className="language-js">{code_realtime}</pre>
              </div>
              <div className="footer">
                <div className="inner">
                  <div className="footericon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className="ml-3">
                    Learn how to set up a fault-tolerant distributed GUN network
                    to transfer live data around the world
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="panel panel-cyan" id="guninfiveminutes">
        <div className="tile py-air flex-col md:items-center lg:items-start">
          <div className="px-6 lg:px-0 lg:w-box lg:mx-auto">
            <div className="md:w-8/12 md:mx-auto lg:mx-0">
              <h2>GUN in 5 minutes</h2>
              <ol>
                <li>
                  <p>
                    <strong>Start a GUN peer. </strong>
                    <Hyphenated>
                      A peer is a remote database instance that you can sync
                      your data with. You can deploy one to{" "}
                      <a
                        href="https://heroku.com/deploy?template=https://github.com/amark/gun"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        heroku
                      </a>
                      , spin it up in{" "}
                      <a
                        href="https://hub.docker.com/r/gundb/gun"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        docker
                      </a>
                      , use the{" "}
                      <a
                        href="https://gun.eco/docs/Installation#server"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        node.js API directly
                      </a>
                      , or start one with{" "}
                      <a
                        href="https://github.com/skiqh/gun-cli"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GUN's cli
                      </a>{" "}
                      like this:
                    </Hyphenated>
                  </p>

                  <div className="panel panel-small panel-white mt-4">
                    <div className="tile code">
                      <div className="buttons">
                        <CopyToClipboard
                          onCopy={() => {
                            console.log("copied")
                          }}
                          text={`npx gun-cli --host 127.0.0.1`}
                        >
                          <button className="text-pink">
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </CopyToClipboard>
                      </div>
                      <pre>{`#  Assuming you have node.js and npm installed, run this in your command line\nnpx gun-cli --host 127.0.0.1`}</pre>
                    </div>
                  </div>
                </li>
                <li>
                  <p>
                    <strong>Add the GUN library. </strong>
                    <Hyphenated>
                      GUN runs in{" "}
                      <a
                        href="https://gun.eco/docs/Installation#browser"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        browsers
                      </a>{" "}
                      (going back to IE 6), in{" "}
                      <a
                        href="https://gun.eco/docs/Installation#node"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Node.js
                      </a>
                      ,{" "}
                      <a
                        href="https://gun.eco/docs/Installation"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Electron
                      </a>
                      , and even{" "}
                      <a
                        href="https://gun.eco/docs/React-Native"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React Native
                      </a>
                      . Install it from{" "}
                      <a
                        href="https://www.npmjs.com/package/gun"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        npm
                      </a>
                      , use a{" "}
                      <a
                        href="https://www.jsdelivr.com/package/npm/gun"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CDN
                      </a>
                      , or{" "}
                      <a
                        href="https://github.com/amark/gun/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        download it here
                      </a>
                      .
                    </Hyphenated>
                  </p>
                  <div className="panel panel-small panel-white mt-4">
                    <div className="tile code">
                      <div className="buttons">
                        <CopyToClipboard
                          onCopy={() => {
                            console.log("copied")
                          }}
                          text={`<script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script>`}
                        >
                          <button className="text-pink">
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </CopyToClipboard>
                      </div>
                      <pre>{`<!-- To get going, add GUN to your website from a CDN -->\n<script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script>`}</pre>
                    </div>
                  </div>
                </li>
                <li>
                  <p>
                    <strong>Play around with your data. </strong>
                    <Hyphenated>
                      GUN's{" "}
                      <a
                        href="https://gun.eco/docs/API"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        core API
                      </a>{" "}
                      is deliberately small but powerful. For more, check out
                      GUN's many{" "}
                      <a
                        href="https://gun.eco/docs/API#-extended-api-"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        useful extensions
                      </a>{" "}
                      or explore its{" "}
                      <a
                        href="https://github.com/amark/gun/wiki/Awesome-GUN"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        wider ecosystem
                      </a>
                    </Hyphenated>
                  </p>
                  <p>
                    <Hyphenated>
                      As an example, try relaying live data over the GUN peer
                      you just started — run the following snippets in the
                      consoles of two separate tabs or browsers:
                    </Hyphenated>
                  </p>
                  <div className="panel panel-small panel-white mt-4">
                    <div className="tile code">
                      <div className="buttons">
                        <CopyToClipboard
                          onCopy={() => {
                            console.log("copied")
                          }}
                          text={code_browser_a}
                        >
                          <button className="text-pink">
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </CopyToClipboard>
                      </div>
                      <Dots
                        a={themecolors.blue}
                        b={themecolors.pink}
                        c={themecolors.orange}
                      />
                      <pre>{code_browser_a}</pre>
                    </div>
                  </div>
                  <div className="panel panel-small panel-white mt-2">
                    <div className="tile code">
                      <div className="buttons">
                        <CopyToClipboard
                          onCopy={() => {
                            console.log("copied")
                          }}
                          text={code_browser_b}
                        >
                          <button className="text-pink">
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </CopyToClipboard>
                      </div>
                      <Dots
                        a={themecolors.blue}
                        b={themecolors.pink}
                        c={themecolors.orange}
                      />
                      <pre>{code_browser_b}</pre>
                    </div>
                  </div>
                </li>
              </ol>
              <h2>Nice, right?</h2>
              <p>
                <Hyphenated>
                  But we've barely scratched the surface. Start the tutorial or
                  check out the documentation to see what else you can do with
                  GUN!
                </Hyphenated>
              </p>
              <div className="links">
                <a href="/docs" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faArrowRight} />
                  Jump straight to GUN's Documentation
                </a>
                <a
                  href="https://gun.eco/docs/Todo-Dapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                  Tutorial: Create a distributed multi-user todo app
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="inner lg:w-box lg:mx-auto px-6 lg:px-0">
            <span className="pr-16 hidden md:block footerlead">Join us!</span>
            <a
              href="https://twitter.com/databasegun"
              target="_blank"
              rel="noopener noreferrer"
              className="item"
            >
              <TwitterLogo />
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
              <GithubLogo />
              <span className="hidden sm:w-3/12 text-xxs sm:block lg:text-xs">
                Star GUN on Github
              </span>
            </a>
            <a
              href="https://discordapp.com/channels/612645357850984470/612645357850984473"
              target="_blank"
              rel="noopener noreferrer"
              className="item"
            >
              <DiscordLogo />
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
                <h2 className="mb-1 md:mb-4 text-sm md:text-lg">Concepts</h2>
                <ul className="font-mono text-dark text-sm">
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
                <h2 className="mb-1 md:mb-4 text-sm md:text-lg">Links</h2>
                <ul className="font-mono text-dark text-sm">
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
                      href="https://discordapp.com/channels/612645357850984470/612645357850984473"
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
                <h2 className="mb-1 md:mb-4 text-sm md:text-lg">Explainer Videos</h2>
                <ul className="font-mono text-dark text-sm">
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
                <h2 className="mb-1 sm:mb-4 text-sm md:text-lg">Technical Videos</h2>
                <ul className="font-mono text-dark text-sm">
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

export default IndexPage
