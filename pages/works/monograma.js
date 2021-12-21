import { Box, Container } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Monograma">
    <Container>
      <Title>Monograma</Title>
      <h1>
        Proceso de realización de un monograma personal que me indentificase
        como diseñadora. Desde el monograma estático hasta su animación
      </h1>
      <WorkImage src="/images/works/monograma_00.png" alt="Monograma" />
      <h1>Monograma animado</h1>
      <Box>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/temN0n4DX6c"
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
