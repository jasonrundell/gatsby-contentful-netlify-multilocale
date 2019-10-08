import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

const Container = styled('nav')`
  ${tw`container`};
`

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
      <Container role="navigation">
        <ul>
          {data.allContentfulPage.edges.map(({ node }) => (
            <li key={node.slug}>
              <Link to={node.slug}>{node.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    )}
  />
)
