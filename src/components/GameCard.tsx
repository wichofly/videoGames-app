import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "./hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImgUrl from "../services/image-url"

// interface Props {
//   game: Game
// }

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card w='300px' borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(plat => plat.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard

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