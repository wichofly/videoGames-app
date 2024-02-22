import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  sortOrder: string
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ]

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu >
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order =>
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector

/**
 * With 'Relevance' is not needed a value cause is the default sort order.
 * '-added': It is prefix it with a hyphen, because when the user selects the sort order, we want to show the newest games first.
    So, it is reversed the sort order.
    '-released': shows the new releases first.
 * 'currentSortOrder':
     It uses the  find  method on the  sortOrders  array to search for an order where the  value  property matches the  sortOrder  variable. 
 */