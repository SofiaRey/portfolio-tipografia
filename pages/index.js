import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoMailOutline
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hola, bienvenidos a mi Curriculum interactivo!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sofía Rey
          </Heading>
          <p>Desarrolladora Web Junior</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Perfil Personal
        </Heading>
        <Paragraph>
          Soy una desarrolladora web junior, formada en ÁNIMA, tengo 18 años.
          Estoy estudiado una Licenciatura en Diseño Multimedia, combinando mis
          áreas favoritas: programación y diseño. En mi tiempo libre, disfruto
          de tocar el piano, hacer acrobacia en telas y paro de manos.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Mis trabajos
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experiencia
        </Heading>
        <BioSection>
          <BioYear>11/2021 - Presente</BioYear>
          Desarrolladora Full-stack - CreateThrive
        </BioSection>
        <BioSection>
          <BioYear>08/2020 - 11/2020</BioYear>
          Pasantía en Ingeniería en QA - Rootstrap
        </BioSection>
        <BioSection>
          <BioYear>05/2020 - 08/2020</BioYear>
          Desarrolladora Freelance
        </BioSection>
        <BioSection>
          <BioYear>04/2019 - 11/2019</BioYear>
          Pasantía en desarrollo - Arkano
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Educación
        </Heading>
        <BioSection>
          <BioYear>03/2021 - Presente</BioYear>
          Universidad ORT - Lic. Diseño Multimedia
        </BioSection>
        <BioSection>
          <BioYear>02/2018 - 11/2020</BioYear>
          ÁNIMA - Bachillerato Tecnológico (TIC)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contacto y redes
        </Heading>
        <List>
          <ListItem>
            <Link
              href="mailto:sofia.rey.se@gmail.com?Subject=Contacto"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoMailOutline} />}
              >
                sofia.rey.se@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://wa.me/+59894214359" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoWhatsapp} />}
              >
                +598 94 214 359
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://instagram.com/bitacora.multimedia"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @bitacora.multimedia
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/SofiaRey" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @SofiaRey
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid py={4} columns={1} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UC0qkZOGxXtYyNe1psvVuqvA"
            title="Sofía Rey"
            thumbnail={thumbYouTube}
          >
            Mi canal de youtube
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
