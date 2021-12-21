import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Fotografía">
    <Container>
      <Title>Fotografía Producto</Title>
      <h1>
        Set de fotografía armado casero en casa. Edición en Adobe LightRoom y
        Photoshop
      </h1>

      <WorkImage src="/images/works/fotografia_02.jpg" alt="fotografia" />
      <WorkImage src="/images/works/fotografia_03.jpg" alt="fotografia" />
      <WorkImage src="/images/works/fotografia_04.jpg" alt="fotografia" />
      <WorkImage src="/images/works/fotografia_01.jpg" alt="fotografia" />
    </Container>
  </Layout>
)

export default Work
