---
to: src/mutations/<%= dir %>/<%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Mutation.ts
unless_exists: true
---
import { commitMutation, graphql } from 'react-relay'
import { initEnvironment } from '../../lib/relay'

const mutation = graphql`
  mutation <%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Mutation(
    $input: <%= name.charAt(0).toUpperCase() %><%= name.slice(1) %>Input!
  ) {
    <%= name %>(input: $input) {

      errors
    }
  }
`

export function <%= name %>(input, onCompleted, onError) {

  const environment = initEnvironment({})

  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input
      },
      onCompleted,
      onError
    }
  )
}