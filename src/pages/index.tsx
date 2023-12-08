import Head from "next/head";
import { APP_NAME, MAX_WIDTH } from "@/lib/constants";
import {
  Box,
  Heading,
  Button,
  Container,
  HStack,
  Divider,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useToast,
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/home.module.css";
import { addWaitlist } from "@/lib/api";
import { useState } from "react";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <Box>
        <Navbar />

        <Box
          bgImage={"/img/hero.png"}
          color={"#fff"}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
        >
          <Box bg={"rgba(0, 0, 0, 0.85)"} py={"13rem"}>
            <Container maxW={MAX_WIDTH} textAlign={"center"}>
              <Heading size={"3xl"} mb={"3rem"} lineHeight={"1.5"}>
                Where Accessibility Meets Tomorrow&apos;s Technology
              </Heading>
              <Button
                fontSize={"1.4rem"}
                py={"2rem"}
                px={"3rem"}
                bg={"#0A6CB7 !important"}
                color={"#fff"}
                fontFamily={"var(--font-head)"}
                borderRadius={"none"}
                onClick={onOpen}
              >
                Join the Waitlist
              </Button>
            </Container>
          </Box>
        </Box>

        <Box>
          <Container maxW={MAX_WIDTH} py={"5rem"}>
            <HStack
              align={"flex-start"}
              wrap={"wrap"}
              className={styles.innovations}
            >
              <Box maxW={"600px"} className={styles.available}>
                <Heading size={"lg"} as={"h2"} mb={"3rem"} id="innovations">
                  Available Innovations
                </Heading>
                <Text fontSize={"1.2rem"}>
                  <Image
                    src={"/img/innovate.jpg"}
                    alt="innovations seebility"
                    float={"left"}
                    width={"350px"}
                    marginRight={"1rem"}
                    marginBottom={"1rem"}
                  />
                  Seebility v0.1: Voice-Powered Shopping for the Visually
                  Impaired Our pioneering conversational AI-voice app tailored
                  for the visually impaired. Shop effortlessly online using just
                  your voice, making e-commerce accessible and enjoyable. Join
                  our beta and experience the change!
                </Text>
              </Box>
              <Divider
                className={styles.divider}
                mx={"3rem"}
                alignSelf={"center"}
                orientation="vertical"
                height={"380px"}
                bg={"gray"}
                width={"2px"}
              />
              <Box maxW={"500px"} className={styles.incoming}>
                <Heading size={"lg"} mb={"3rem"}>
                  Incoming Innovations
                </Heading>
                <Heading textAlign={"center"} size={"md"}>
                  Join the waiting list to be notified
                </Heading>
              </Box>
            </HStack>
          </Container>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent minW={"700px"}>
            <ModalCloseButton />
            <ModalBody p={"3rem"} px={"4rem"}>
              <Text
                textAlign={"center"}
                mb={"1.3rem"}
                fontFamily={"var(--font-head)"}
              >
                Thanks for your interest in Seebility. Be the first to
                experience Seebility&apos;s innovation. Sign up now with your
                phone number or email.
              </Text>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  const email =
                    e?.currentTarget?.querySelector("input")?.value ?? "";
                  console.log("email", email);
                  if (!email) {
                    toast({
                      title: "Error",
                      description: "Please enter a valid email address",
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                      position: "top",
                    });
                    return;
                  }
                  try {
                    const response = await addWaitlist(email);
                    setIsLoading(false);
                    if (response.status == 201) {
                      toast({
                        title: "Success",
                        description: "You have been added to the waitlist",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                      });
                      return;
                    }
                  } catch (e) {
                    setIsLoading(false);
                    toast({
                      title: "Error",
                      description: "You are already on the waitlist",
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                      position: "top",
                    });
                    return;
                  }
                  toast({
                    title: "Error",
                    description: "An error occurred",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  });
                }}
              >
                <HStack>
                  <FormControl>
                    <Input type="email" placeholder="Your email address" />
                  </FormControl>
                  <Button type="submit" colorScheme="blue" px={"4rem"} isLoading={isLoading}>
                    Get Notified
                  </Button>
                </HStack>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Footer />
      </Box>
    </>
  );
}

export default Home;
