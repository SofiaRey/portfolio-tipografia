import { Container } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Collages">
    <Container>
      <Title>Collages</Title>
      <h1>Técnicas visuales aplicadas en Collages</h1>
      <WorkImage src="/images/works/collage_01.png" alt="Collage" />
      <P>
        Se aprecia actividad y inestabilidad en los movimientos de la bailarina.
        Ella se encuentra generando una diagonal muy marcada, lo cual potencia
        las técnicas mencionadas. Además se aprecia la unidad porque a pesar de
        ser un collage de cosas muy diferentes, todo se une entre sí y cobra
        sentido en conjunto. Trata de representar el sentimiento de inmersión en
        una pasión, cuando estás tan concentrado haciendo algo que amas que
        pasas a otra dimensión llena de color.
      </P>

      <WorkImage src="/images/works/collage_02.png" alt="Collage" />
      <P>
        La complejidad se aprecia en la cantidad de elementos tan diferentes que
        hay en el centro de la composición, todos juntos en distintos planos,
        dificultando ver el comienzo y el fin de cada uno. Entre ellos no
        guardan ninguna relación o patrón, son simplemente aleatorios, mezclando
        animales, objetos, paisajes. Por último, el acento se aprecia en la
        diferencia entre el marco y el centro, ya que por fuera del borde que se
        plantea está todo en blanco y negro, y dentro los colores están muy
        saturados.
      </P>

      <WorkImage src="/images/works/collage_03.png" alt="Collage" />
      <P>
        La regularidad está presente en la forma en la que aparecen los rostros,
        todos respetando un mismo centro y un mismo final, con el mismo tamaño,
        conformando una cara en conjunto. La opacidad se observa en la manera
        que el lente de la cámara recorta los rostros, invisibilizando el fondo
        de las fotos. El realismo se ve en cada parte de la composición: los
        primeros planos permiten ver a detalle cada persona y por fuera se
        aprecia tanto los bellos del brazo del fotógrafo como la nieve.
        Representa la variedad de personas que captura una cámara.
      </P>
    </Container>
  </Layout>
)

export default Work
