import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import Layout from "../components/layout"

import heroStyles from "../components/hero.module.css"

export default props => {
  const { data } = props
  const { contentfulPage, site } = data
  const page = contentfulPage
  const { siteMetadata } = site

  return (
    <Layout>
      <div style={{ background: "#fff" }}>
        <Helmet title={`${page.title} | ${siteMetadata.title}`} />
        <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={page.title}
            fluid={page.heroImage.fluid}
          />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{page.title}</h1>
          <p
            style={{
              display: "block",
            }}
          >
            {page.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: page.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
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
