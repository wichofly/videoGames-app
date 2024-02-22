import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<CiSearch />} />
      <Input borderRadius={20} placeholder='Search games...' variant='filled' />
    </InputGroup>
  )
}

export default SearchInput