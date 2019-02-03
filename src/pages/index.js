import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ARFE`, `application`, `email`, `Poodle`]} />
    <p>Poodle is a new email client with social features.</p>
    <div style={{ maxWidth: `180px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <nav style={{ display: "flex" }}>
      <FlatButton href="https://sitr.us/2017/06/20/what-is-poodle.html">
        Read the background
      </FlatButton>
      <FlatButton href="https://github.com/PoodleApp/poodle">
        Check out the code
      </FlatButton>
      <FlatButton href="https://github.com/PoodleApp/poodle/releases/latest">
        Try out the latest release
      </FlatButton>
    </nav>
  </Layout>
)

function FlatButton({ children, href }) {
  return (
    <a className="flatButton" href={href}>
      {children}
    </a>
  )
}

export default IndexPage
