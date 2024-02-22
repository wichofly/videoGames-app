import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)

  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <Text>{error && <p>{error}</p>}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding='10px'
      >
        {isLoading && skeletons.map(skeleton =>
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>)}
        {data.map(game =>
          <GameCardContainer key={game.id} >
            <GameCard game={game} />
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid

/**
 * In this component we need state variable for storing our game objects.
 * Is needed a state variable for errors.
 * Effect hook sends a fetch request to the backend, we pass a callback.
   In this function we need to use our apiClient, so on the top, we import apiClient that get me send a request to the games.
 * Two ways to make the map function:
    1- the  map  function is used without destructuring the object. Each item in the  games  array is passed as an argument to the callback function, and you access the  id  and  name  properties using the dot notation ( game.id  and  game.name ). 
       <ul>
        {games.map(game =>
        <li key={game.id}>{game.name}</li>)}
       </ul>
    2- the  map  function is used with destructuring assignment. Each item in the  games  array is destructured into separate variables  id  and  name  within the callback function, allowing you to directly use  id  and  name  without accessing them through the object.
       <ul>
        {games.map(({ id, name }) =>
        <li key={id}>{name}</li>)}
       </ul>
 * SimpleGrid provides a friendly interface to create responsive grid layouts with ease.
 * const skeletons = [1, 2, 3, 4, 5, 6] --> six Cards to show loading
 */