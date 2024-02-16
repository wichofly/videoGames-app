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
}

const useGames = () => useData<Game>('/games')

export default useGames;

/**
 * parent_platforms: {platform: Platform}[] ===> It is an array of objects, where each object has a property called platform of type Platform.
   This is known as the design smell.
 */
