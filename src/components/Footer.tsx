import { Box, Button, HStack, Link, Text } from "@chakra-ui/react"
import { FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa"

interface Props {
  text: string
}

const Footer = ({ text }: Props) => {
  return (
    <HStack p='20px' justifyContent='space-between' fontSize='xl' >
      <Text as='b' >{text}</Text>
      <Box textAlign='center'>
        <Text as='b'>Find me on</Text>
        <HStack justifyContent='space-between' my={2}>
          <Button variant='ghost'>
            <Link href="https://www.linkedin.com/in/mauricio-erazo-/" isExternal>
              <FaLinkedin fontSize='1.8em' />
            </Link>
          </Button>

          <Button variant='ghost'>
            <Link href="https://github.com/wichofly/videoGames-app" isExternal>
              <FaGithub fontSize='1.8em' />
            </Link>
          </Button>

          <Button variant='ghost'>
            <Link href="https://wichofly.github.io/portfolio-website/" isExternal>
              <FaLaptop fontSize='1.8em' />
            </Link>
          </Button>
        </HStack>
      </Box>
    </HStack>
  )
}

export default Footer