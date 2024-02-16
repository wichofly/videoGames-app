import { Badge } from "@chakra-ui/react"


const CriticScore = ({ score }: { score: number }) => {

  const color = score >= 85 ? 'green' : score >= 70 ? 'yellow' : 'red'

  return (
    <Badge
      fontSize='18px'
      px={2}
      borderRadius='4px'
      colorScheme={color}
    >
      {score}
    </Badge>
  )
}

export default CriticScore

/**
 * Badges are used to highlight an item's status for quick recognition.
 * colorScheme --> includes the foreground, background, shadows borders. nice to use it.
 */