import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

// interface Props {
//   children: RactNode
// }

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box w='300px' borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  )
}

export default GameCardContainer