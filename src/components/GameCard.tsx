import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "./hooks/useGames"

// interface Props {
//   game: Game
// }

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
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
 */