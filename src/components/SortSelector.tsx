import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"

const SortSelector = () => {
  return (
    <Menu >
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order by Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector