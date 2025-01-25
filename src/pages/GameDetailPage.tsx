import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';
import GameTrailer from '../components/GameTrailer';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // "!": it is used to be string and undefined

  if (isLoading) return <Spinner />;

  if (error) throw error;

  if (!game) return <Text>No Game data available.</Text>;

  return (
    <Box>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
