import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Code,
  Link,
  Icon,
  VStack,
  Grid,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import theme from './theme';
import ProjectCard from './ProjectCard';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading as="h1" size="4xl" color="purple.900">
              {' '}
              {/* Replace this with an actual logo! */}
              Sean Sng
            </Heading>
            <HStack fontSize="3xl">
              <Link href="https://github.com/SeanCena" isExternal>
                <Icon _hover={{ color: 'purple.900' }} as={FaGithub} />
              </Link>
              <Link href="https://www.linkedin.com/in/sean-sng/" isExternal>
                <Icon _hover={{ color: 'purple.900' }} as={FaLinkedin} />
              </Link>
              <Link href="mailto:seansng1@gmail.com" isExternal>
                <Icon _hover={{ color: 'purple.900' }} as={FaEnvelope} />
              </Link>
            </HStack>
            <Text maxWidth="50%">
              Computer Engineering student at Cal Poly SLO. Art, music, and
              code.
            </Text>
          </VStack>
          <SimpleGrid minChildWidth="300px" spacing="20px" mt={8}>
            {/* Projects go here */}
            <ProjectCard
              img="assets/edoprovid.png"
              title="EDOProVid"
              description={`A Discord bot that converts replay files from a popular Yugioh
                            simulator into videos that show the entire gameplay of a duel, allowing
                            users to easily share and watch their duels with others. Made with
                            Python and AWS.`}
              href="https://discord.com/api/oauth2/authorize?client_id=1145976977321377842&permissions=277025426432&scope=bot"
              github="https://github.com/SeanCena/edoprovid/tree/main"
            />
            <ProjectCard
              img="assets/placeholder.jpeg"
              title="Mashup"
              description={`A DJ app for parties that analyzes everyone's Spotify accounts to
                            understand their music tastes, then plays music that matches everybody's
                            preferences. Made with Python and React. [WIP]`}
              href=""
              github=""
            />
            <ProjectCard
              title="Coming soon..."
              description="A secret project in the works"
            />
            <ProjectCard
              title="Coming soon..."
              description="A secret project in the works"
            />
            <ProjectCard
              title="Coming soon..."
              description="A secret project in the works"
            />
          </SimpleGrid>
          {/*
          <VStack mt={8}><Quote /></VStack>
          */}
          <VStack mt={8}>
            <Code>Made with Chakra UI. 2023</Code>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
