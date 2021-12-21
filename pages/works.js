import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import thumbCollages from '../public/images/works/collage_eyecatch.png'
import thumbAutorretrato from '../public/images/works/retrato_eyecatch.png'
import thumbFotografia from '../public/images/works/fotografia_eyecatch.png'
import thumbIllustration from '../public/images/works/illustration_eyecatch.png'
import thumbCorto from '../public/images/works/corto_eyecatch.png'
import thumbGlow from '../public/images/works/glow_eyecatch.png'
import thumbMonograma from '../public/images/works/monograma_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Trabajos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="monograma"
            title="Monograma"
            thumbnail={thumbMonograma}
          >
            Tipografía I
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="collages"
            title="Collages"
            thumbnail={thumbCollages}
          >
            Diseño y Comunicación visual II
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fotografia"
            title="Fotografía Producto"
            thumbnail={thumbFotografia}
          >
            Fotografía y edición de video I
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="autorretratos"
            title="Autorretratos"
            thumbnail={thumbAutorretrato}
          >
            Diseño y Comunicación visual I
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ilustraciones"
            thumbnail={thumbIllustration}
            title="Ilustraciones"
          >
            Diseño Digital II
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="corto"
            thumbnail={thumbCorto}
            title="Corto - The Tumble"
          >
            Fotografía y Edición de Video I
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="glow" thumbnail={thumbGlow} title="Glow Effect">
            Fotografía y Edición de Video I
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
