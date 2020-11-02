import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ufficio.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 1000, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <FeatureImageWrapper>
      <Img
        fixed={fixed ? fixed : data.file.childImageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />
    </FeatureImageWrapper>
  )
}
