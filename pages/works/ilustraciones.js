import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Ilustraciones">
    <Container>
      <Title>Ilustraciones</Title>
      <h1>Ilustraciones realizadas con Adobe Illustrator y Figma.</h1>

      <WorkImage src="/images/works/illustration_01.jpg" alt="Ilustración" />
      <P>Aplicación de degradés y máscaras de opacidad en Illustrator.</P>
      <WorkImage src="/images/works/illustration_02.png" alt="Ilustración" />
      <P>Vectorización de un paisaje real en Illustrator.</P>
      <WorkImage src="/images/works/illustration_03.jpg" alt="Ilustración" />
      <P>Aplicación de herramienta de fusión con lineas en Illustrator.</P>
      <WorkImage src="/images/works/illustration_04.png" alt="Ilustración" />
      <P>Representación del género Rock and Roll en Figma.</P>
    </Container>
  </Layout>
)

export default Work
