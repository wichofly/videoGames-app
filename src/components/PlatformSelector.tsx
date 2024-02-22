import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

const PlatformSelector = () => {
  return (
    <Menu >
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector