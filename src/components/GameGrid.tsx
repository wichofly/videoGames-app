import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number
  name: string
}

interface fetchGamesResponse {
  count: number
  results: Game[]
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient<fetchGamesResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message))
  }, [])



  return (
    <>
      <Text>{error && <p>{error}</p>}</Text>
      <ul>
        {games.map(game =>
          <li key={game.id}>{game.name}</li>)}
      </ul>
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
 */