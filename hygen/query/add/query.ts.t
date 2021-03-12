---
to: src/queries/<%= dir %>/<%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Page.ts
unless_exists: true
---
import { graphql } from 'react-relay'

export default graphql`
  query <%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Page_<%= name %>Query {

  }
`