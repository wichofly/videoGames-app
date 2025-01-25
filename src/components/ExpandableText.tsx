import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <Text fontSize="lg">
      {summary}
      <Button
        size="sm"
        ml="1"
        fontWeight="bold"
        colorScheme="teal"
        variant="outline"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
