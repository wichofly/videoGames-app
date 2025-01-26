import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useGameQueryStore } from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const backgroundColor = useColorModeValue('gray.50', 'gray.650');

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();

        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/');
        }
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

/* Coding with Zustand:
 * const { setSearchText } = useGameQueryStore();
  This component will be dependent on useGameQueryStore. Meaning that every time that value in the store changes, the component will be rerender.

 * const setSearchText = useGameQueryStore(s => s.setSearchText)
  Better approach is to use a "selector (s or what ever)" to select our update function. So, the component is only dependent on the Function not dependent on useGameQueryStore.
  Anything else changes, this component does not care.  

 */
