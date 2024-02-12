import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {


  return (
    <Grid templateAreas={{
      base: `"nav" "main" "footer"`,
      lg: `"nav nav" "aside main" "aside footer"`
    }}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr '}
      h='200px' gap='1' color='blackAlpha.700'>
      <GridItem pl='2' bg='orange.300' area={'nav'}>
        Nav
      </GridItem>
      <Show above='lg'>
        <GridItem pl='2' bg='blue.300' area={'aside'}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid >
  )

}

export default App
