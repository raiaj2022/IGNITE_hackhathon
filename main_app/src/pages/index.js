import * as React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useState } from "react";
import "../webComponents/my-element.bundled";
import { Container } from "../components/styles/Container.styled";
import { Info } from "../components/styles/Info.styled";
import { StepOne } from "../components/styles/StepOne.styled";
import {Content} from "../components/styles/Content.styled"
import { StepTwo } from "../components/styles/StepTwo.styled";
import { StepThree } from "../components/styles/StepThree.styled";
import { StepFour } from "../components/styles/StepFour.styled";
import "../webComponents/side-bar.bundled.js";
import { BsFillCheckCircleFill } from "react-icons/bs";

const IndexPage = ({data}) => {
  const [body, setBody] = useState(data.allMdx.edges[0].node.body);
  const [stepButtonsColor, setStepButtonsColor] = useState(
    [
      '#f1f1ec33', 
      '#FFFFFF', 
      '#f1f1ec33', 
      '#f1f1ec33'
    ]
  );


  let handleClick1 = () => {
    setStepButtonsColor(['#FFFFFF', '#f1f1ec33', '#f1f1ec33', '#f1f1ec33']);
    let edges = data.allMdx.edges;

    for (let i=0; i<edges.length; i++) {
      if (edges[i].node.slug === "step1") {
        setBody(edges[i].node.body) 
      }
    }
  }

  let handleClick2 = () => {
    setStepButtonsColor(['#f1f1ec33', '#FFFFFF', '#f1f1ec33', '#f1f1ec33']);
    let edges = data.allMdx.edges;

    for (let i=0; i<edges.length; i++) {
      if (edges[i].node.slug === "step2") {
        setBody(edges[i].node.body) 
      }
    }
  }

  let handleClick3 = () => {
    setStepButtonsColor(['#f1f1ec33', '#f1f1ec33', '#FFFFFF', '#f1f1ec33']);
    let edges = data.allMdx.edges;

    for (let i=0; i<edges.length; i++) {
      if (edges[i].node.slug === "step3") {
        setBody(edges[i].node.body) 
      }
    }
  }

  let handleClick4 = () => {
    setStepButtonsColor(['#f1f1ec33', '#f1f1ec33', '#f1f1ec33', '#FFFFFF']);
    let edges = data.allMdx.edges;

    for (let i=0; i<edges.length; i++) {
      if (edges[i].node.slug === "step4") {
        setBody(edges[i].node.body) 
      }
    }
  }
  
  return (
    <>
      <side-bar homeLink="/" calendarLink="/Calendar">
      </side-bar>
      <Container>
        <Info>
          <h1>Hello Username.</h1>
          <p>Find out what you need to do...</p>
        </Info>
        <StepOne btnColor={stepButtonsColor[0]}>
          <button onClick={handleClick1}><BsFillCheckCircleFill/></button>
          <p>Step 1 Name</p>
        </StepOne>
        <StepTwo btnColor={stepButtonsColor[1]}>
          <button onClick={handleClick2}>2</button>
          <p>Step 2 Name</p>
        </StepTwo>
        <StepThree btnColor={stepButtonsColor[2]}>
          <h1><button onClick={handleClick3}>3</button></h1>
          <p>Step 3 Name</p>
        </StepThree>
        <StepFour btnColor={stepButtonsColor[3]}>
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
