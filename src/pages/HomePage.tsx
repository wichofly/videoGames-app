import { Grid, Show, GridItem, Box, Flex } from '@chakra-ui/react';
import Footer from '../components/Footer';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" "footer"`,
        lg: `"aside main" "footer footer"`,
      }}
      // gridTemplateRows={'50px 1fr 30px'}
      // gridTemplateColumns={'150px 1fr '}
      // h='200px' gap='1'
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem pl="2" area={'aside'} px={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem pl="2" area={'main'}>
        <Box pl={2}>
          <GameHeading />
          <Flex mb={5}>
            <Box mr={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>

      <GridItem pl="2" area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
