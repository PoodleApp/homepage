import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

interface Props {
  description?: string
  lang?: string
  meta?: MetaProps[]
  keywords?: string[]
  title: string
}

type MetaProps = JSX.IntrinsicElements["meta"]

/* type Meta = { name: string, content: string } | { property: string, content: string } */

function SEO({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  title
}: Props) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaBase: MetaProps[] = [
          {
            name: `description`,
            content: metaDescription
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: data.site.siteMetadata.author
          },
          {
            name: `twitter:title`,
            content: title
          },
          {
            name: `twitter:description`,
            content: metaDescription
          }
        ]
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={metaBase
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
