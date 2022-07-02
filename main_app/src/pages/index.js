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
  return (
    <>
      <Container>
        <Info>
          <h1>Hello Username.</h1>
          <p>Find out what you need to do...</p>
        </Info>
        <StepOne>
          <h1>1</h1>
          <p>Step 1 Name</p>
        </StepOne>
        <StepTwo>
          <h1>2</h1>
          <p>Step 2 Name</p>
        </StepTwo>
        <StepThree>
          <h1>3</h1>
          <p>Step 3 Name</p>
        </StepThree>
        <StepFour>
          <h1>4</h1>
          <p>Step 4 Name</p>
        </StepFour>
        <Content>
          {/* MDX to be added in */}
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
