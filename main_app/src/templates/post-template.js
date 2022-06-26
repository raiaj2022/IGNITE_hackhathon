import { graphql } from 'gatsby'

const PostTemplate = ({ data }) => {
  
  console.log('BODY', data.allMdx.edges[1]);
  debugger;
  return (
    <>
    </>
  )
}

// export const query = graphql`
//   query MyQuery {
//     allMdx {
//       edges {
//         node {
//           id
//           body
//         }
//       }
//     }
//   }
// `

export default PostTemplate