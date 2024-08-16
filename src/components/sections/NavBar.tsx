import { Box, Flex, Stack, Button, Link, Image } from "@chakra-ui/react";
import { useRef } from "react";

export function NavBar({ HowSectionRef }: any) {
  const handleGoToHow = () => {
    if (HowSectionRef.current) {
      HowSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      display={"flex"}
      height={"90px"}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="white"
      zIndex={5}
      px={"4rem"}
      pt={"10px"}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex>
        <Image src="/images/logo.png" alt="" />
      </Flex>

      <Stack spacing={5} direction={"row"}>
        <Link
          _hover={{
            color: "#00BF63",
          }}
          as={"button"}
          onClick={handleGoToHow}
        >
          Comment ça marche ?
        </Link>
        <Link
          href={"/"}
          _hover={{
            color: "#00BF63",
          }}
        >
          {" "}
          Nos Partenaires
        </Link>

        <Link
          href={"/"}
          _hover={{
            color: "#00BF63",
          }}
        >
          Services
        </Link>
        <Link
          href={"/"}
          _hover={{
            color: "#00BF63",
          }}
        >
          À propos
        </Link>
        <Link
          href={"/"}
          _hover={{
            color: "#00BF63",
          }}
        >
          Contact
        </Link>
      </Stack>

      <Stack spacing={2} direction={"row"} ml={10}>
        <Button
          rounded={"full"}
          px={6}
          bg={"#00BF63"}
          color={"white"}
          _hover={{
            background: "#11836C",
          }}
        >
          Rejoindre liste d&apos;attente
        </Button>
        <Button rounded={"full"} px={6}>
          Télécharger l&apos;appli
        </Button>
      </Stack>
    </Box>
  );
}
