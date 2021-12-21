import { Box, Container } from '@chakra-ui/react'
import { Title } from '../../components/work'
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
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Container>
  </Layout>
)

export default Work
