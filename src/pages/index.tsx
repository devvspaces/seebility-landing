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
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/home.module.css";

function Home() {
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
              >
                Join the Waitlist
              </Button>
            </Container>
          </Box>
        </Box>

        <Box>
          <Container maxW={MAX_WIDTH} py={"5rem"}>
            <HStack align={'flex-start'} wrap={'wrap'} className={styles.innovations}>
              <Box maxW={'600px'} className={styles.available}>
                <Heading size={'lg'} as={"h2"} mb={'3rem'} id="innovations">Available Innovations</Heading>
                <Text fontSize={'1.2rem'}>
                  <Image
                    src={"/img/innovate.jpeg"}
                    alt="innovations seebility"
                    float={"left"}
                    width={"350px"}
                    marginRight={'1rem'}
                    marginBottom={'1rem'}
                  />
                  Seebility v0.1: Voice-Powered Shopping for the Visually
                  Impaired Our pioneering conversational AI-voice app tailored
                  for the visually impaired. Shop effortlessly online using just
                  your voice, making e-commerce accessible and enjoyable. Join
                  our beta and experience the change!
                </Text>
              </Box>
              <Divider className={styles.divider} mx={'3rem'} alignSelf={'center'} orientation="vertical" height={'380px'} bg={'gray'} width={'2px'} />
              <Box maxW={'500px'} className={styles.incoming}>
                <Heading size={'lg'} mb={'3rem'}>Incoming Innovations</Heading>
                <Heading textAlign={"center"} size={"md"}>
                  Join the waiting list to be notified
                </Heading>
              </Box>
            </HStack>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
}

export default Home;
