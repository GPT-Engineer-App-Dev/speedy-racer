import { Box, Flex, Heading, Text, Button, Image, Container } from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" h="100vh" bg="gray.900" color="white">
        <Flex px={5} py={3} align="center" justify="space-between" bg="blackAlpha.800">
          <Heading size="lg" letterSpacing="tight">Racing Xtreme</Heading>
          <Flex align="center">
            <Button colorScheme="teal" mr={4}>Home</Button>
            <Button colorScheme="teal" mr={4}>About</Button>
            <Button colorScheme="teal" mr={4}>Features</Button>
            <Button leftIcon={<FaGamepad />} colorScheme="pink" variant="solid">Play Now</Button>
          </Flex>
        </Flex>
        <Flex flex="1" direction="column" align="center" justify="center" bgImage="url('/images/racing-game-bg.jpg')" bgSize="cover" bgPos="center">
          <Heading as="h1" size="2xl" mb={3}>Experience the Thrill of Speed</Heading>
          <Text fontSize="xl" mb={5}>Join the ultimate racing adventure.</Text>
          <Button size="lg" colorScheme="orange" variant="solid">Get Started</Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;