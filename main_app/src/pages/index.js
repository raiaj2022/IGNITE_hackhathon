import * as React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useState } from "react";
import "./my-element.bundled";

const IndexPage = ({data}) => {
  const [body, setBody] = useState(data.allMdx.edges[0].node.body)

  let handleClick1 = () => {
    let edges = data.allMdx.edges;

    for (let i=0; i<edges.length; i++) {
      if (edges[i].node.slug === "step1") {
        setBody(edges[i].node.body) 
      }
    }
  }

  let handleClick2 = () => {
    let edges = data.allMdx.edges;

    for (let i=0; i<edges.length; i++) {
      if (edges[i].node.slug === "step2") {
        setBody(edges[i].node.body) 
      }
    }
  }

  return (
    <>
      <my-element /> 
      <h1>Hello World</h1>
      <button onClick={handleClick1}>Step 1</button>
      <button onClick={handleClick2}>Step 2</button>
      <MDXRenderer>
        {body}
      </MDXRenderer>
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
