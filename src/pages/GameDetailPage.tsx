import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import {
  Box,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // "!": it is used to be string and undefined

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <Box>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
