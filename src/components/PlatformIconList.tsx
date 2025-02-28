import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Platform } from '../interfaces/Platform';

// interface Props {
//   platforms: Platform[]
// }

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  const iconMap: { [key: string]: IconType } = {
    // all slug is written
    playstation: FaPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: FaGlobe,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };

  return (
    <HStack mt={4}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
