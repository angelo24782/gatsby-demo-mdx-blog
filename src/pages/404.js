import React from "react"
import { graphql } from "gatsby"
import { Container, FeatureImage, Content } from "../components"
import { H1 } from "../elements"

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed

  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Uh-oh... What you're looking for couldn't be found
        </H1>
      </Content>
    </Container>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query notFoundQuery {
    imageSharp(fixed: { originalName: { eq: "404.jpg" } }) {
      fixed(width: 1000, height: 627) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
