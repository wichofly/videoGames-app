import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box my={5}>
      <Heading
        as="dt"
        fontSize="md"
        fontWeight="semibold"
        textDecoration="underline"
        mb={2}
      >
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
