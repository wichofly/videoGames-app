import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImgUrl from "../services/image-url"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()

  // if (isLoading) return <Spinner />
  // return isLoading ? <Spinner /> : null;

  return (
    <>
      {error ? null : ''}
      {isLoading && <Spinner />}

      <List>
        {data.map(genre =>
          <ListItem key={genre.id} py='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                src={getCroppedImgUrl(genre.image_background)}
              />
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        )}
      </List>
    </>
  )
}

export default GenreList