import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImgUrl from "../services/image-url"

interface Props {
  onSelectedGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
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
              <Button
                fontSize='lg'
                variant='link'
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        )}
      </List >
    </>
  )
}

export default GenreList