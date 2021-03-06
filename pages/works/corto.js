import { Box, Container } from '@chakra-ui/react'
import { Title } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>Corto - The Tumble</Title>
      <h1>
        Corto cinematográfico de suspenso hecho en conjunto con el profesor de
        Fotografía y el de Edición de video.
      </h1>

      <Box>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/wa_PPY5Aom8"
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
