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
  <Layout title="Glow Effect">
    <Container>
      <Title>Glow Effect</Title>
      <h1>Glow effect realizado en Adobe After Effects.</h1>

      <Box>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/Gq_fnjo6K9A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </Container>
  </Layout>
)

export default Work
