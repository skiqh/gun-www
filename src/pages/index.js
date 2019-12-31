import React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
// import Prism from "prismjs"
import Hyphenated from "react-hyphen"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import NBCcover from "../images/cover/nbcnews.jpg"
import Nordiccover from "../images/cover/nordicjs.jpg"

import NBClogo from "../images/logo/nbc.svg"
import HNlogo from "../images/logo/hackernews.svg"
import TClogo from "../images/logo/techcrunch.svg"
import CDlogo from "../images/logo/coindesk.svg"
import TwitterLogo from "../images/logo/twitter.svg"
import GithubLogo from "../images/logo/github.svg"
import DiscordLogo from "../images/logo/discord.svg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faArrowRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"

// require("prismjs/themes/prism-solarizedlight.css")

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
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    // Prism.highlightAll()
  })

  
  return (
    <Layout>
      <SEO title="Home" />
      <div class="boxed">
        <div class="flex flex-col md:flex-row mb-air mt-air">
          <div class="order-3 md:order-1 w-full md:w-3/5 lg:w-1/2">
            <h2>Get ready to disrupt Big Tech</h2>
            <p>
              GUN gives you the most powerful weapons of the internet —{" "}
              <a href="##">decentralization</a> and{" "}
              <a href="##">real privacy</a> — to reclaim the web and make it
              truly free and open.
            </p>
            <div class="links">
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Get up and running with GUN in five minutes or less
              </a>
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Watch GUN's author share his vision for the web
              </a>
            </div>
          </div>

          <div class="order-2 h-12 md:h-auto flex-grow-0 md:flex-grow"></div>

          <div class="order-1 md:order-3 w-full md:w-smallcol">
            <a href="##" class="panel panel-small">
              <div class="tile">
                <img
                  src={NBCcover}
                  alt="NBC News: Mark Nadal on the next generation of the web"
                />
              </div>
              <div class="footer">
                <div class="inner">
                  <div class="footericon">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <div class="ml-3">
                    <Hyphenated>
                      GUN author Mark Nadal on why he is building a
                      decentralized web, and what it looks like.
                    </Hyphenated>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="flex flex-col md:flex-row mb-air">
          <div class="w-full md:w-smallcol">
            <a href="##" class="panel panel-small">
              <div class="tile">
                <img
                  src={Nordiccover}
                  alt="Nordic.js presentation by Mark Nadal: The Design and Evolution of Event-Driven Databases"
                />
              </div>
              <div class="footer">
                <div class="inner">
                  <div class="footericon">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <div class="ml-3">
                    <Hyphenated>
                      Mark Nadal at Nordic.js 2017 - The Design and Evolution of
                      Event-Driven Databases
                    </Hyphenated>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="h-12 md:h-auto flex-grow-0 md:flex-grow"></div>

          <div class="w-full md:w-3/5 lg:w-1/2">
            <h2>Powerful and flexible</h2>
            <p>
              <Hyphenated>
                GUN is a database engine that runs everywhere JavaScript does —{" "}
                <a href="##">browsers</a>, <a href="##">mobile devices</a> and{" "}
                <a href="##">servers</a>, allowing you to build exactly the data
                system you want.
              </Hyphenated>
            </p>
            <div class="links">
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Learn how to add GUN to an existing React oder Svelte app
              </a>
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Build a distributed &amp; fault tolerant data delivery system
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-yellow">
        <div class="tile py-air">
          <div class="boxed">
            <h3>8 Million users and counting</h3>
            <h2>
              <Hyphenated>
                GUN is powering decentralized platforms with millions of users
                and vastly different requirements on a shoestring budget.
              </Hyphenated>
            </h2>
            <div class="links">
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

        <div class="footer">
          <div class="inner boxed">
            <span class="pr-16 hidden sm:block footerlead">
              GUN in the news
            </span>
            <div class="item w-3/12 sm:w-1/9 h-10">
              <NBClogo />
            </div>
            <div class="item w-3/12 sm:w-1/9 h-10">
              <TClogo />
            </div>
            <div class="item w-3/12 sm:w-1/9 h-10">
              <HNlogo />
            </div>
            <div class="item w-3/12 sm:w-1/9 h-10">
              <CDlogo />
            </div>
          </div>
        </div>
      </div>

      <div class="boxed">
        <div class="flex flex-col md:flex-row mb-air mt-air">
          <div class="order-3 md:order-1 w-full md:w-3/5 lg:w-1/2">
            <h2>Decentralized auth built-in</h2>
            <p>
              <Hyphenated>
                GUN's <a href="##">security module</a> is built on strong
                encryption standards and works completely decentralized. In
                other words — real privacy with no single point of failure.
              </Hyphenated>
            </p>
            <div class="links">
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Learn how to securely store and exchange user data
              </a>
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Build a multi-user chat with e2e encryption
              </a>
            </div>
          </div>

          <div class="order-2 h-12 md:h-auto flex-grow-0 md:flex-grow"></div>

          <div class="order-1 md:order-3 w-full md:w-smallcol">
            <div class="panel panel-small panel-green">
              <div class="tile code">
                <pre class="language-js">{code_sea}</pre>
              </div>
              <div class="footer">
                <div class="inner">
                  <div class="footericon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div class="ml-3">
                    Read more about SEA, GUN's built-in module for Security,
                    Encryption and Authentication
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row mb-air">
          <div class="w-full md:w-smallcol">
            <div class="panel panel-purple panel-small">
              <div class="tile code">
                <pre class="language-js">{code_graph}</pre>
              </div>
              <div class="footer">
                <div class="inner">
                  <div class="footericon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div class="ml-3">
                    Learn how to create, traverse, index and query linked data
                    in GUN
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="h-12 md:h-auto flex-grow-0 md:flex-grow"></div>

          <div class="w-full md:w-3/5 lg:w-1/2">
            <h2>Graph data for the win</h2>
            <p>
              <Hyphenated>
                GUN's <a href="##">graph data model</a> allows you to use
                intuitive data structures and queries, while still being capable
                of doing <a href="##">20M+ API ops/sec</a> in just ~9KB gzipped
                size.
              </Hyphenated>
            </p>
            <div class="links">
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Read more about the power of graph data
              </a>
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Query a GUN database with GraphQL
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row mb-air mt-air">
          <div class="order-3 md:order-1 w-full md:w-3/5 lg:w-1/2">
            <h2>Respond in real-time</h2>
            <p>
              <Hyphenated>
                Any remote updates to the data you subscribe to will be
                automatically propagated through the network, so you can react
                to changes as they happen.
              </Hyphenated>
            </p>
            <div class="links">
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Learn how GUN peers find and talk to each other
              </a>
              <a href="##">
                <FontAwesomeIcon icon={faArrowRight} />
                Watch GUN's author implement its sync algorithm from scratch
              </a>
            </div>
          </div>

          <div class="order-2 h-12 md:h-auto flex-grow-0 md:flex-grow"></div>

          <div class="order-1 md:order-3 w-full md:w-smallcol">
            <div class="panel panel-small panel-blue">
              <div class="tile code">
                <pre class="language-js">{code_realtime}</pre>
              </div>
              <div class="footer">
                <div class="inner">
                  <div class="footericon">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div class="ml-3">
                    Learn how to set up a globally distributed GUN network to
                    transfer live data around the world
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-cyan" id="guninfiveminutes">
        <div class="tile py-air">
          <div class="boxed">
            <div class="guninfiveminutes md:w-8/12">
              <h2>GUN in 5 minutes</h2>
              <ol>
                <li>
                  <p>
                    <strong>Start a GUN peer. </strong>
                    <Hyphenated>
                      A peer is a remote database instance that you can sync
                      your data with. You can deploy one to{" "}
                      <a href="##">heroku</a>, spin it up in{" "}
                      <a href="##">docker</a>, or use the{" "}
                      <a href="##">node.js API directly</a>.
                    </Hyphenated>
                  </p>
                  <p>
                    <Hyphenated>
                      Assuming you have node.js and npm installed, you can just
                      use <a href="##">GUN's command line interface</a> like
                      this:
                    </Hyphenated>
                  </p>
                  <code>npx gun-cli --host 127.0.0.1</code>
                </li>
                <li>
                  <p>
                    <strong>Add the GUN library. </strong>
                    <Hyphenated>
                      GUN runs in <a href="##">browsers</a> (going back to IE
                      6), in <a href="##">Node.js</a>, <a href="##">Electron</a>
                      , and even <a href="##">React Native</a>. Install it from{" "}
                      <a href="##">npm</a>, or <a href="##">download it here</a>
                      .
                    </Hyphenated>
                  </p>
                  <p>
                    <Hyphenated>
                      To get going, just add GUN to your website from a{" "}
                      <a href="##">CDN</a>:
                    </Hyphenated>
                  </p>
                  <code>
                    {`<script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script>`}
                  </code>
                </li>
                <li>
                  <p>
                    <strong>Play around with your data. </strong>
                    <Hyphenated>
                      GUN's <a href="">core API</a> is deliberately small but
                      powerful. For more, check out GUN's many{" "}
                      <a href="##">useful extensions</a> or explore its <a href="##">wider ecosystem</a>
                    </Hyphenated>
                  </p>
                  <p>
                    <Hyphenated>
                      As an example, try relaying live data over the GUN peer
                      you just started — run the following snippets in the
                      consoles of two separate tabs or browsers:
                    </Hyphenated>
                  </p>
                  <pre>{code_browser_a}</pre>
                  <pre>{code_browser_b}</pre>
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
              <div class="links">
                <a href="##">
                  <FontAwesomeIcon icon={faArrowRight} />
                  Jump straight to GUN's Documentation
                </a>
                <a href="##">
                  <FontAwesomeIcon icon={faArrowRight} />
                  Tutorial: Create a multi-user public todo app
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="inner boxed">
            <span class="pr-16 hidden sm:block footerlead">Join us!</span>
            <div class="item">
              <TwitterLogo />
              <span class="linktext">Follow GUN on Twitter</span>
            </div>
            <div class="item">
              <GithubLogo />
              <span class="linktext">Star GUN on Github</span>
            </div>
            <div class="item">
              <DiscordLogo />
              <span class="linktext">Join our Discord</span>
            </div>
          </div>
        </div>
      </div>

      <div class="boxed h-16"></div>

      <div class="panel panel-purple" id="panel-links">
        <div class="tile py-air">
          <div class="boxed">
            <div class="flex flex-row items-start justify-between">
              <div class="item">
                <h2>Concepts</h2>
                <ul class="font-mono text-dark">
                  <li>
                    <a href="##">HAM — Conflict resolution</a>
                  </li>
                  <li>
                    <a href="##">SEA — Security &amp; encryption</a>
                  </li>
                  <li>
                    <a href="##">RAD — Storage data structure</a>
                  </li>
                  <li>
                    <a href="##">DAM — Mesh netwoking</a>
                  </li>
                  <li>
                    <a href="##">AXE — Incentivised transfer</a>
                  </li>
                  <li>
                    <a href="##">DHT — Finding content</a>
                  </li>
                  <li>
                    <a href="##">CAP — Database tradeoffs</a>
                  </li>
                  <li>
                    <a href="##">DAP — Distributed system limits</a>
                  </li>
                </ul>
              </div>
              <div class="item">
                <h2>Links</h2>
                <ul class="font-mono text-dark">
                  <li>
                    <a href="##">FAQ</a>
                  </li>
                  <li>
                    <a href="##">Docs</a>
                  </li>
                  <li>
                    <a href="##">Github</a>
                  </li>
                  <li>
                    <a href="##">Issues</a>
                  </li>
                  <li>
                    <a href="##">Twitter</a>
                  </li>
                  <li>
                    <a href="##">Discord</a>
                  </li>
                  <li>
                    <a href="##">Youtube</a>
                  </li>
                </ul>
              </div>
              <div class="item">
                <h2>Explainer Videos</h2>
                <ul class="font-mono text-dark">
                  <li>
                    <a href="##">Chronological ordering</a>
                  </li>
                  <li>
                    <a href="##">Proof of work</a>
                  </li>
                  <li>
                    <a href="##">Digital signature</a>
                  </li>
                  <li>
                    <a href="##">Data security</a>
                  </li>
                  <li>
                    <a href="##">Crypto</a>
                  </li>
                  <li>
                    <a href="##">more ...</a>
                  </li>
                </ul>
              </div>
              <div class="item">
                <h2>Technical Videos</h2>
                <ul class="font-mono text-dark">
                  <li>
                    <a href="##">Conflict resolution algorithm</a>
                  </li>
                  <li>
                    <a href="##">User accounts with SEA</a>
                  </li>
                  <li>
                    <a href="##">Implementing lists in GUN</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="inner boxed">
            <div class="footericon text-4xl">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div class="text-xs ml-4">
              Made with love by the ERA team, and many very awesome
              contributors. <br />
              Liberally licensed under Zlib or MIT or Apache 2.0
            </div>
            <div class="flex-grow"></div>
          </div>
        </div>
      </div>
      <div class="boxed h-16"></div>
    </Layout>
  )
}

export default IndexPage
