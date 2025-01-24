import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import usePlatform from '../hooks/usePlatform';
import usePlatformsId from '../hooks/usePlatformsId';
import { useGameQueryStore } from '../store';

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatformsId(selectedPlatformId);

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
              onClick={() => setSelectedPlatformId(platform.id)}
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
