import usePlatform from './usePlatform';

const usePlatformsId = (id?: number) => {
  const { data: platforms } = usePlatform();

  return platforms?.results.find((platform) => platform.id === id);
};

export default usePlatformsId;
