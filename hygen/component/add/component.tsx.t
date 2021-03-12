---
to: src/components/<%= dir %>/<%= name %>.tsx
unless_exists: true
---
import { createFragmentContainer, graphql } from 'react-relay'

type Props = {

}

const <%= name %>: React.FC<Props> = props => {

  return (
    <>
    
      <style jsx>{`
      
      `}</style>
    </>
  )
}

export default createFragmentContainer(<%= name %>, {
  query: graphql`
    fragment <%= name %>_query on Query {

    }
  `,
})