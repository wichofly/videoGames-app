import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useColorModeValue,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Platform } from './hooks/usePlatform';
import GameHeading from './components/GameHeading';
import Footer from './components/Footer';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const bgColor = useColorModeValue('gray.50', 'gray.800'); // light gray for light mode, darker gray for dark mode
  const color = useColorModeValue('teal', 'gray.300');

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      // gridTemplateRows={'50px 1fr 30px'}
      // gridTemplateColumns={'150px 1fr '}
      // h='200px' gap='1'
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
      bg={bgColor}
      color={color}
    >
      <GridItem pl="2" area={'nav'}>
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem pl="2" area={'aside'} px={5}>
          <GenreList
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>

      <GridItem pl="2" area={'main'}>
        <Box pl={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex mb={5}>
            <Box mr={5}>
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
                selectedPlatformId={gameQuery.platformId}
              />
            </Box>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

      <GridItem pl="2" area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
