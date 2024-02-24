import { Box, HStack, Link, Text } from "@chakra-ui/react"
import { FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa"

interface Props {
  text: string
}

const Footer = ({ text }: Props) => {
  return (
    <HStack p='20px' justifyContent='space-between' fontSize='xl' >
      <Text as='b' >{text}</Text>
      <Box >
        <Text as='b'>Find me on</Text>
        <HStack justifyContent='space-between' my={2} fontSize='1.3em'>
          <Link href="https://www.linkedin.com/in/mauricio-erazo-/" isExternal>
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/wichofly/videoGames-app" isExternal>
            <FaGithub />
          </Link>
          <Link href="https://wichofly.github.io/portfolio-website/" isExternal>
            <FaLaptop />
          </Link>
        </HStack>
      </Box>
    </HStack>
  )
}

export default Footer