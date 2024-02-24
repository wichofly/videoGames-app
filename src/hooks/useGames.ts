import { GameQuery } from '../App';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number 
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;

/**
 * parent_platforms: {platform: Platform}[] ===> It is an array of objects, where each object has a property called platform of type Platform.
   This is known as the design smell.

 * The beauty of query objects: 
   Instead of passing so many variables around, we have a single object that includes everything we need.
 */
