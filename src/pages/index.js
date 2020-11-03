import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 21, 2020"
          title="My First Post! Hello World!"
          excerpt="Habitant pharetra, urna ipsum interdum risus nunc. Venenatis orci, sagittis, elementum urna."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
