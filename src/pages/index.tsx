import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const links = [
  ["Read the background", "https://sitr.us/2017/06/20/what-is-poodle.html"],
  ["Check out the code", "https://github.com/PoodleApp/poodle"],
  [
    "Try the latest release",
    "https://github.com/PoodleApp/poodle/releases/latest"
  ]
]

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  nav: {
    display: "flex",
    marginBottom: "3em"
  }
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" keywords={[`ARFE`, `application`, `email`, `Poodle`]} />
      <p>Poodle is a new email client with social features.</p>
      <div style={{ maxWidth: `180px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p>
        The web was transformed when{" "}
        <a href="https://en.wikipedia.org/wiki/XMLHttpRequest">XHR</a> decoupled
        web pages from network requests. Web sites changed from simple pages of
        text and pictures into interactive applications.
      </p>
      <p>
        Poodle aims to make a similar transformation to email: instead of
        exchanging simple HTML messages, Poodle messages contain structured data
        that express intentions such as editing shared documents, or liking
        someone's comment.
      </p>
      <p>
        Poodle is an email client. It is completely compatible with existing
        email service providers. All if the features that Poodle introduces
        operate over email exchanges - there are no new servers, and your data
        will never be transmitted to the creators of Poodle or to a third-party.
        Poodle exchanges gracefully degrade - all of the information in messages
        produced by Poodle is accessible to readers using traditional email
        clients.
      </p>
      <nav className={classes.nav}>
        {links.map(([text, href]) => (
          <Button
            className={classes.button}
            href={href}
            key={href}
            variant="contained"
          >
            {text}
          </Button>
        ))}
      </nav>
    </Layout>
  )
}

export default IndexPage
