import React from "react"
import { graphql } from "gatsby"

import Helmet from "react-helmet"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <Helmet title={`404 - Page not found | ${data.site.siteMetadata.title}`} />
    <main>
      <section>
        <h1 className="section-headline">404 - Page not found</h1>
      </section>
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query Page404 {
    site {
      siteMetadata {
        title
      }
    }
  }
`
