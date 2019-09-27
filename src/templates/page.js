import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Hero from "../components/hero"

export default props => {
  const { data } = props
  const { contentfulPage, site } = data
  const page = contentfulPage
  const { siteMetadata } = site

  return (
    <Layout>
      <Helmet title={`${page.title} | ${siteMetadata.title}`} />
      <div>
        <Hero image={page.heroImage} imageAltText={page.name} />
      </div>
      <main>
        <h1>{page.title}</h1>
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: page.body.childMarkdownRemark.html,
            }}
          />
        </section>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
