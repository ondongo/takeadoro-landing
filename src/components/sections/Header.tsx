import {
  Box,
  Container,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  Button,
  createIcon,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";

import React, { useRef } from "react";
import { NavBar } from "./NavBar";

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

function Header({ HowSectionRef }: any) {
  return (
    <Box>
      <NavBar HowSectionRef={HowSectionRef} />
      <Flex
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        p={0}
        mt={"5rem"}
      >
        {/* Image de fond */}
        <Image
          src="/images/BgHeader.jpg"
          alt="Header Background"
          objectFit="cover"
          width="100%"
          height="auto"
          zIndex="0"
        />

        <Box
          display="flex"
          width="80%"
          padding="2rem"
          zIndex="1"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Flex direction={"column"} gap={"16px"}>
            <Box maxW={"600px"}>
              <Stack spacing={{ base: 8, md: 4 }}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                  lineHeight={"110%"}
                  color={"#1C486F"}
                >
                  Simplifiez vos envois{" "}
                  <Text as={"span"} color={"#F8E387"}>
                    d&apos;argent en un clin d&apos;œil
                  </Text>
                </Heading>
                <Text color={"gray.500"} maxW={"3xl"}>
                  Envoyez de l&apos;argent instantanément via Orange Money,
                  Wave, et Airtel Money, en toute confiance, entre différents
                  canaux.
                </Text>
              </Stack>
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              flex="1"
              mr={4}
              gap={"10px"}
            >
              <Flex flex={1}>
                <FormControl>
                  <Input placeholder="Votre email ici " size="md" />
                </FormControl>
              </Flex>
              <Flex flex={1}>
                <Button
                  bg={"#00BF63"}
                  color={"white"}
                  size="md"
                  rounded={"full"}
                  _hover={{
                    background: "#11836C",
                  }}
                >
                  Rejoindre la liste d&apos;attente
                </Button>
              </Flex>
            </Flex>
            <Flex
              fontWeight={"normal"}
              alignItems={"center"}
              color={"#00BF63"}
              gap={"5px"}
            >
              <PlayIcon h={4} w={4} color={"#00BF63"} />

              <Link href={"/"}>voir la video </Link>
            </Flex>
          </Flex>

          <Image
            src="/images/PhoneMockup.png"
            alt="Second Image"
            objectFit="contain"
            height="35rem"
            flex="1"
            ml={4}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
