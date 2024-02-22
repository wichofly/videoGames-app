import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGames'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform()

  if (error) return null

  return (
    <>
      {/* {error ? null : ''} */}

      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {data.map(platform =>
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>)}
        </MenuList>
      </Menu >
    </>
  )
}

export default PlatformSelector

/**
 * Using "if (error) return null"
   It doesn't show the platform button, it is better than "{error ? null : ''}"

 * {selectedPlatform?.name || 'Platforms'}
   It will show the name selected otherwise it will show Platforms 
 */