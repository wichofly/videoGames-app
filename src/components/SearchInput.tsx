import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const backgroundColor = useColorModeValue('gray.50', 'gray.650');

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<CiSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          backgroundColor={backgroundColor}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

/**
 * As a rule, we need onSubmit={evt => evt.preventDefault()} in form. Always!!!
    It prevent the form from being posted to the server.

 * Because we have a simple form with a single input field, it's easier to use ref hook.

 * if (ref.current) onSearch(ref.current.value)
   This code checks if the ref.current value exists, and if it does, it calls the onSearch function with the value of ref.current as an argument. 
 */
