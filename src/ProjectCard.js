// Project card component

import {
  Stack,
  Text,
  Image,
  Heading,
  Card,
  Link,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';

function ProjectCard(props) {
  return (
    <Card>
      <Link href={props.href} _hover={{ color: 'purple.900' }}>
        <CardBody>
          <Stack>
            <Image
              src={
                process.env.PUBLIC_URL +
                (props.img === undefined
                  ? 'assets/placeholder.jpeg'
                  : props.img)
              }
            />
            <Heading fontSize="3xl">{props.title}</Heading>
            <Text align="left">{props.description}</Text>
          </Stack>
        </CardBody>
      </Link>
      <CardFooter align="left">
        <ButtonGroup spacing="2">
          {props.tryme === undefined ? undefined : (
            <Link href={props.tryme}>
              <Button variant="solid" colorScheme="purple">
                Try me!
              </Button>
            </Link>
          )}
          {props.github === undefined ? undefined : (
            <Link href={props.github}>
              <Button leftIcon={<FaGithub />}>View Github repo</Button>
            </Link>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
