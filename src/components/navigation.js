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
        <ul className={styles.navigation}>
          {data.allContentfulPage.edges.map(({ node }) => (
            <li className={styles.navigationItem} key={node.slug}>
              <Link to={node.slug}>{node.title}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles.langNavigation}>
          <li className={styles.navigationItem}>
            <Link to="/en-CA/">English</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/fr-CA/">French</Link>
          </li>
        </ul>
      </nav>
    )}
  />
)
