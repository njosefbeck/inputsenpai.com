import React from "react"

import Layout from "../components/layout"
import EhonImage from "../components/ehon-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <h2>Our mission: to help you on your journey to Japanese fluency by providing you with high-quality input-based Japanese language resources.</h2>
      
    <p>Through reading and listening resources that either we've created or that we've found around the net, we aim to give you plenty of opportunities to immerse yourself in Japanese. Extensive reading and listening gives your brain lots of opportunities to acquire the language, much like a native person would with their first language.</p>

    <p>
      Have an idea for an input-based app?<br/>
      Have a resource that you'd like to share?<br/>
      Want to chat about Japanese language learning?<br/>
    </p>

    <p>Don't hesitate to get in touch via <a href="mailto:hello@inputsenpai.com">email</a> or <a href="https://twitter.com/inputsenpai" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>

    <h3>Picture Book Challenge (えほんのチャレンジ)</h3>

    <div>
      <a href="https://ehon.inputsenpai.com"><EhonImage /></a>
    </div>

    <p>Use our <a href="https://ehon.inputsenpai.com">Picture Book Challenge app</a> to track your progress through EhonNavi's library of Japanese children's books. With EhonNavi you can read over 1000 books one time for free. Great way to get lots of exposure to Japanese language written for native speakers.</p>
  </Layout>
)

export default IndexPage
