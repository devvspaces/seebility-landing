import {
  Container,
  Heading,
  Box,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import styles from "./index.module.css";
import { MAX_WIDTH } from "@/lib/constants";

export default function Footer() {
  return (
    <Box bg={"#101828"} color={"#fff"} id="contact">
      <Container maxW={MAX_WIDTH} textAlign={'center'} py={4}>
        <Heading size={'md'} mb={2}>Contact Us</Heading>
        <Link href={"mailto:akin@thinknodes.com"}>akin@thinknodes.com</Link>
      </Container>
    </Box>
  );
}
