import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import NBCcover from "../images/cover/nbcnews.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="flex flex-row">
      <div>
        <h2>Get ready to disrupt Big Tech</h2>
        <p>
          GUN gives you the most powerful weapons of the internet —{" "}
          <a href="##">decentralization</a> and <a href="##">real privacy</a> —
          to reclaim the web and make it truly free and open.
        </p>
      </div>
      <div>
        <div class="panel">
          <div class="tile">
            <img src={NBCcover} />
          </div>
          <div class="footer">
            <p>
              GUN author Mark Nadal on why he is building a decentralized web,
              and what it looks like.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div class="panel panel-red">
      <div class="tile">
        <h1>hello</h1>
      </div>
      <div class="footer">
        <div>GUN in the news</div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
