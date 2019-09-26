import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ArticlePreview from "../components/article-preview"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const pages = get(this, "props.data.allContentfulPage.edges")

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          {/* <Hero data={author.node} /> */}
          <div className="wrapper">
            <h2 className="section-headline">Navigation</h2>
            <ul className="article-list">
              {pages.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
