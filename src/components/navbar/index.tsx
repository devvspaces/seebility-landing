import {
  Container,
  Button,
  Flex,
  Heading,
  useDisclosure,
  IconButton,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import styles from "./index.module.css";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import routes from "@/lib/routes";
import { APP_NAME, MAX_WIDTH } from "@/lib/constants";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={'#101828'} color={'#fff'}>
      <Container maxW={MAX_WIDTH} className={styles.container}>
      <Flex
        className={styles.navbar}
        justifyContent={"space-between"}
        align={"center"}
      >
        <Heading
          as={"h1"}
          size={{
            base: "md",
            md: "lg",
          }}
          className={styles.header}
        >
          <Image src="/img/1.png" alt="logo" />
          <Image src="/img/2.png" alt="logo" />
        </Heading>

        <IconButton
          size={"lg"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          onClick={isOpen ? onClose : onOpen}
          className={styles.hamburgerIcon}
          bg={"transparent"}
          colorScheme="white"
          display={{ md: "none" }}
        />

        <DesktopNav />
      </Flex>
      <Flex
        height={{ md: "0px" }}
        display={{ md: "none !important" }}
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          paddingTop: isOpen ? "1rem" : "0px",
          paddingBottom: isOpen ? "1rem" : "0px",
          transition: "all 0.3s ease-in-out",
          height: isOpen ? "50px" : "0px",
          overflow: "hidden",
        }}
      >
        <Link href={routes.innovations} textDecor={"none !important"}>
          Innovations
        </Link>
        <Link href={routes.contact} textDecor={"none !important"}>
          Contact
        </Link>
      </Flex>
    </Container>
    </Box>
  );
}

function DesktopNav() {
  return (
    <Flex className={styles.navbarRight} gap={"1rem"}>
      <Link href={routes.innovations} textDecor={"none !important"}>
          Innovations
      </Link>
      <Link href={routes.contact} textDecor={"none !important"}>
          Contact
      </Link>
    </Flex>
  );
}
