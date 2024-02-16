import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

interface fetchGamesResponse {
  count: number
  results: Game[]
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient<fetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => {
        setGames(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })

    return () => controller.abort();
  }, [])

  return { games, error, isLoading }

}

export default useGames

/**
 * parent_platforms: {platform: Platform}[] ===> It is an array of objects, where each object has a property called platform of type Platform.
   This is known as the design smell.
 */