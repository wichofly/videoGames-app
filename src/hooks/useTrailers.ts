import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Trailer } from '../interfaces/Trailer';

const useTrailers = (gameId: number) => {
  const apiCLient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiCLient.getAll
  });
};
export default useTrailers;
