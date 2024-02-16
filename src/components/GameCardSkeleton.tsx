import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card w='300px' borderRadius={10} overflow='hidden'>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton

/**
 * Skeleton is like a place holder for an image that has been loaded.
 */