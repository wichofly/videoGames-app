import { FaPlaystation, FaXbox, FaWindows, FaApple, FaLinux, FaAndroid, FaGlobe } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { Text } from "@chakra-ui/react"
import { Platform } from "./hooks/useGames"

// interface Props {
//   platforms: Platform[]
// }

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  return (
    <>
      {platforms.map((platform) => <Text>{platform.name}</Text>)}
    </>
  )
}

export default PlatformIconList