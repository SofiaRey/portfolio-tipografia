import { Container } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Autorretratos">
    <Container>
      <Title>Autorretratos</Title>
      <h1 as="h4" fontSize={16} my={6}>
        Propuesta de autorretratos que representan mis gustos e intereses, con
        el objetivo de explorar la relación figura fondo.
      </h1>

      <WorkImage src="/images/works/retrato_01.png" alt="Autorretrato" />
      <P>
        El autorretrato, en su totalidad, representa un piano, mi instrumento
        favorito. En el mismo podemos apreciar por cada tecla un elemento
        diferente en referencia a mis gustos: labial (maquillaje), brocha (arte
        y diseño), telas aéreas (acrobacia en telas), micrófono (canto), cuchara
        (cocina) y libro (conocimiento), de izquierda a derecha. En la parte
        inferior agregué una ilustración de mi perfil.
      </P>
      <WorkImage src="/images/works/retrato_02.png" alt="Autorretrato" />
      <P>
        El autorretrato consiste en una simplificación de mi figura, de la cual
        sale un arcoíris. Cada color se desvanece en diferentes áreas del
        conocimiento que siento que me representan: música, letras, ciencias,
        idiomas y varios (de violeta a naranja). En la última categoría incluí
        actividades que me gusta hacer y que sentía no pertenecían a las otras.
      </P>
      <WorkImage src="/images/works/retrato_03.png" alt="Autorretrato" />
      <P>
        El autorretrato consiste en una vectorización de mi figura con un fondo
        compuesto por limones. La foto elegida, en malla, pretende interpretar
        mi gusto por la playa, con colores frescos como el amarillo,
        representando el verano. A su vez, el limón es mi fruta favorita.
      </P>
    </Container>
  </Layout>
)

export default Work
