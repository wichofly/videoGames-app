import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';
import { Platform } from '../interfaces/Platform';

const apiClient = new APIClient<Platform>('/platforms/list/parents');

const usePlatform = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('1d'),
    initialData: platforms,
  });

export default usePlatform;
