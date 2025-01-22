import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import usePlatform, { Platform } from '../hooks/usePlatform';
import usePlatformsId from '../hooks/usePlatformsId';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatform();

 const selectedPlatform = usePlatformsId(selectedPlatformId)

  if (error) return null;

  return (
    <>
      {/* {error ? null : ''} */}

      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;

/**
 * Using "if (error) return null"
   It doesn't show the platform button, it is better than "{error ? null : ''}"

 * {selectedPlatform?.name || 'Platforms'}
   It will show the name selected otherwise it will show Platforms 
 */
