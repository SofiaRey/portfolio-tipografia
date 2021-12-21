import { Container } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
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
