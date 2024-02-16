import { Grid, GridItem, Show, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
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
          <GenreList />
        </GridItem>
      </Show>

      <GridItem pl='2' area={'main'}>
        <GameGrid />
      </GridItem>

      <GridItem pl='2' area={'footer'}>
        Footer
      </GridItem>
    </Grid >
  )

}

export default App
