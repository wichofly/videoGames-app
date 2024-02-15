import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "./hooks/useGames"
import PlatformIconList from "./PlatformIconList"

// interface Props {
//   game: Game
// }

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(plat => plat.platform)} />
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