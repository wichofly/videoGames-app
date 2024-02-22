import { Grid, GridItem, Show, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem pl='2' area={'main'}>
        <PlatformSelector
          onSelectPlatform={platform => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>

      <GridItem pl='2' area={'footer'}>
        Footer
      </GridItem>
    </Grid >
  )

}

export default App
