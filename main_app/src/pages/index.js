import * as React from "react";
import MarkDown from "../components/MarkDown";
import { graphql } from 'gatsby';

const IndexPage = ({data}) => {

  return (
    <>
      <MarkDown data={data} /> 
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          id
          body
          slug
        }
      }
    }
  }
`

export default IndexPage
