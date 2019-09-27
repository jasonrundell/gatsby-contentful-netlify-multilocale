import React from 'react'

export default ({ list }) => (
  <ul>
    {list.map(({ node }) => (
      <li key={node.slug}>
        <Link to={node.slug}>{node.title}</Link>
      </li>
    ))}
  </ul>
)
