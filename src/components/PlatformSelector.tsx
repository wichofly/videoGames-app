import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform'

const PlatformSelector = () => {
  const { data, error } = usePlatform()

  if (error) return null

  return (
    <>
      {/* {error ? null : ''} */}

      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Platform
        </MenuButton>
        <MenuList>
          {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu >
    </>
  )
}

export default PlatformSelector

/**
 * Using "if (error) return null"
   It doesn't show the platform button, it is better than "{error ? null : ''}"
 */