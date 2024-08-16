"use client";
import { CountrySelect } from "@/components/atoms/CountrySelect";
import Header from "@/components/sections/Header";
import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

function Home() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Regular expression to match valid numbers (including decimals)
    const numberRegex = /^-?\d*\.?\d*$/;

    // Only update the value if it matches the regex (valid number)
    if (numberRegex.test(inputValue) || inputValue === "") {
      setValue(inputValue);
    }
  };

  /*   const features = Array.apply(null, Array(4)).map(function (x, i) {
    return {
      id: i,
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
    };
  }); */

  const features = [
    {
      id: 1,
      title: "Montant à envoyer",
      text: "Entrez le montant que vous souhaitez envoyer depuis le Sénégal ou le Gabon via l'application Take Adoro. Par exemple, si vous souhaitez envoyer 100 000 XOF.",
    },
    {
      id: 2,
      title: "Frais de transaction",
      text: "Pour chaque envoi, des frais de 9% du montant total s'appliquent. Pour un transfert de 100 000 XOF, les frais s'élèveront à 9 000 XOF.",
    },
    {
      id: 3,
      title: "Montant à recevoir",
      text: "Le destinataire recevra le montant envoyé après déduction des frais de transaction. Dans notre exemple, pour un envoi de 100 000 XOF, le destinataire recevra 91 000 XOF.",
    },
    {
      id: 4,
      title: "Transfert instantané",
      text: "Une fois la transaction confirmée, le montant net est transféré instantanément au compte Orange Money, Wave, ou Airtel Money du destinataire.",
    },
  ];

  const HowSectionRef = useRef<HTMLDivElement>(null);
  return (
    <Flex height={"auto"} overflow={"hidden"} bg={"white"}>
      <Box w={"100%"}>
        <Header HowSectionRef={HowSectionRef}/>

        <Flex
          bg={"#01BF63"}
          mx={"8rem"}
          my={"5rem"}
          height={"auto"}
          borderRadius={"10px"}
          color="white"
          direction={"column"}
          alignItems={"center"}
          py={"2rem"}
          gap={"10px"}
          ref={HowSectionRef}
        >
          <Text fontWeight={"md"} fontSize={"36px"}>
            Comment ça marche ?
          </Text>

          <Text fontSize={"16px"} maxW={"600px"} textAlign={"center"}>
            {" "}
            Avec Take Adoro, envoyer de l&apos;argent entre le Sénégal et le
            Gabon est facile et transparent. Voici comment fonctionne le
            processus de transaction :
          </Text>

          <Flex
            justifyContent="space-between"
            gap={"10px"}
            my={"2rem"}
            px={"5rem"}
            w={"100%"}
          >
            <Flex direction={"column"}>
              {features.map((feature) => (
                <Flex flex={1} key={feature.id} align={"top"}>
                  <VStack align={"start"}>
                    <Text fontWeight={600} color={"#1C486F"}>
                      {feature.id}.{feature.title}
                    </Text>
                    <Text maxW={"490px"}>{feature.text}</Text>
                  </VStack>
                </Flex>
              ))}
            </Flex>

            <Flex>
              <Box
                height={"67vh"}
                borderRadius={"10px"}
                bg={"white"}
                w={"390px"}
                overflow={"hidden"}
              >
                <Flex
                  bg={"#1C486F"}
                  height={"15%"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text fontWeight={"bold"}>Frais de transfert : 9%</Text>
                </Flex>

                <Flex mx={"2rem"} py="20px" direction={"column"} gap={"10px"}>
                  <Text
                    fontWeight={"bold"}
                    color={"#3C0F19"}
                    fontSize={"22px"}
                    textAlign={"center"}
                  >
                    Envoyez de l&apos;argent à vos proches
                  </Text>

                  <Text
                    color={"#3C0F19"}
                    fontSize={"16px"}
                    textAlign={"center"}
                  >
                    Nous veillons à ce que vos proches reçoivent plus d’argent
                    et que cela ne se traduise pas par des frais de service
                    élevés
                  </Text>

                  <Flex
                    border={"2px solid #01BF62"}
                    borderRadius={"10px"}
                    height={"70px"}
                    alignItems={"center"}
                  >
                    {" "}
                    <Flex flex={1} color={"#3C0F19"}>
                      <Input
                        border={"none"}
                        placeholder={"Vous envoyez ..."}
                        value={value}
                        onChange={handleChange}
                        _focus={{
                          border: "none",
                          boxShadow: "none",
                        }}
                      />
                    </Flex>
                    <Flex flex={1} justifyContent={"flex-end"}>
                      <CountrySelect />
                    </Flex>
                  </Flex>

                  <Flex
                    border={"2px solid #01BF62"}
                    borderRadius={"10px"}
                    height={"70px"}
                    alignItems={"center"}
                  >
                    {" "}
                    <Flex flex={1} color={"black"}>
                      <Input
                        border={"none"}
                        placeholder={"Ils obtiennent ..."}
                        value={value}
                        onChange={handleChange}
                        _focus={{
                          border: "none",
                          boxShadow: "none",
                        }}
                      />
                    </Flex>
                    <Flex flex={1} justifyContent={"flex-end"}>
                      <CountrySelect />
                    </Flex>
                  </Flex>

                  <Flex
                    mt={"12px"}
                    bg={"#F7F7F7"}
                    height={"50px"}
                    alignItems={"flex-start"}
                    justifyContent={"center"}
                    borderRadius={"10px"}
                    direction={"column"}
                    px={"1rem"}
                  >
                    <Text color={"#3C0F19"} fontSize={"12px"}>
                      Frais de transfert : 9%
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Home;
