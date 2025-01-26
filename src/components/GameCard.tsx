import { Link } from 'react-router-dom';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../interfaces/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImgUrl from '../services/image-url';
import Emoji from './Emoji';

// interface Props {
//   game: Game
// }

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card>
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((plat) => plat.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={'/games/' + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

/**
 * Remember not using interface
 * Using the interface:

    interface Props {
     game: Game
    }

    const GameCard = ({game}: Props) => {
      ...restOfCode
    }
 * overflow='hidden': ---> helps to do border radius to big images bigger than the container.
    
 * Better way to write it (destructuring assignment) cause is less code:
    {game.parent_platforms.map(({ platform }) => <Text>{platform.name}</Text>)}
   The other way to write using normal code:
    {game.parent_platforms.map(( platform ) => <Text>{platform.platform.name}</Text>)}
 */
