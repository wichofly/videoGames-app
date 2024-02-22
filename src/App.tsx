import { Grid, GridItem, Show, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const color = useColorModeValue('teal', 'gray.300')

  return (
    <Grid templateAreas={{
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "aside footer"`
    }}
      // gridTemplateRows={'50px 1fr 30px'}
      // gridTemplateColumns={'150px 1fr '}
      // h='200px' gap='1' 
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      color={color}
    >
      <GridItem pl='2' area={'nav'}>
        <Navbar />
      </GridItem>

      <Show above='lg'>
        <GridItem pl='2' area={'aside'} px={5}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem pl='2' area={'main'}>
        <PlatformSelector
          onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })}
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

      <GridItem pl='2' area={'footer'}>
        Footer
      </GridItem>
    </Grid >
  )

}

export default App
