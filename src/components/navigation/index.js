import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import styles from "./navigation.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query Navigation {
        allContentfulPage {
          edges {
            node {
              title
              slug
              publishDate
            }
          }
        }
      }
    `}
    render={data => (
      <nav role="navigation">
        <ul>
          {data.allContentfulPage.edges.map(({ node }) => (
            <li key={node.slug}>
              <Link to={node.slug}>{node.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  />
)
