import React from 'react';
import MarkDown from "../components/MarkDown";
import { graphql } from 'gatsby';
import { Provider } from "react-redux";
import store from "../redux/store";

const IndexPage = ({data}) => {
  return (
    <Provider store={store}>
      <MarkDown data={data} /> 
    </Provider>
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
