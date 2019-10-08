import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default props => {
  const { data } = props
  const { contentfulPage, site } = data
  const page = contentfulPage
  const { siteMetadata } = site

  return (
    <Layout title={`${page.title} | ${siteMetadata.title}`}>
      <Hero image={page.heroImage} imageAltText={page.name} />
      <h1>{page.title}</h1>
      <section>
        <div
          dangerouslySetInnerHTML={{
            __html: page.body.childMarkdownRemark.html,
          }}
        />
      </section>
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
