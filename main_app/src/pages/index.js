import * as React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useState } from "react";
import "./my-element.bundled";
import { Container } from "../components/styles/Container.styled";
import { Info } from "../components/styles/Info.styled";
import { StepOne } from "../components/styles/StepOne.styled";
import {Content} from "../components/styles/Content.styled"
import { StepTwo } from "../components/styles/StepTwo.styled";
import { StepThree } from "../components/styles/StepThree.styled";
import { StepFour } from "../components/styles/StepFour.styled";

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

  let handleClick3 = () => {
    let edges = data.allMdx.edges;

    for (let i=0; i<edges.length; i++) {
      if (edges[i].node.slug === "step3") {
        setBody(edges[i].node.body) 
      }
    }
  }

  let handleClick4 = () => {
    let edges = data.allMdx.edges;

    for (let i=0; i<edges.length; i++) {
      if (edges[i].node.slug === "step4") {
        setBody(edges[i].node.body) 
      }
    }
  }
  
  return (
    <>
      <Container>
        <Info>
          <h1>Hello Username.</h1>
          <p>Find out what you need to do...</p>
        </Info>
        <StepOne>
          <h1><button onClick={handleClick1}>1</button></h1>
          <p>Step 1 Name</p>
        </StepOne>
        <StepTwo>
          <h1><button onClick={handleClick2}>2</button></h1>
          <p>Step 2 Name</p>
        </StepTwo>
        <StepThree>
          <h1><button onClick={handleClick3}>3</button></h1>
          <p>Step 3 Name</p>
        </StepThree>
        <StepFour>
          <h1><button onClick={handleClick4}>4</button></h1>
          <p>Step 4 Name</p>
        </StepFour>
        <Content>
          {/* MDX to be added in */}
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </Content>
      </Container>
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
