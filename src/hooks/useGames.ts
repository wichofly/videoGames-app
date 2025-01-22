import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { Platform } from './usePlatform';
import APIClient, { FetchResponse } from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;

/**
 * parent_platforms: {platform: Platform}[] ===> It is an array of objects, where each object has a property called platform of type Platform.
   This is known as the design smell.

 * The beauty of query objects: 
   Instead of passing so many variables around, we have a single object that includes everything we need.
 */
