import { Articles } from "@/utils/interfaces"
import { Avatar, Button, Flex, Text, GridItem, Stack } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

interface ArticleCardProps {
  article: Articles
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <GridItem>
      <Flex gap={4}>
        <Avatar name={article.name} src={article.avatar} />
        <Stack flexGrow={1}>
          <Text fontWeight={600} fontSize="lg">
            {article.name}
          </Text>
          <Text noOfLines={2}>{article.description}</Text>
        </Stack>
        <Link href={`/articles/${article.id}`} target="_blank">
          <Button
            variant="solid"
            fontWeight={400}
            backgroundColor="#222"
            color="#e9e9e9"
            _hover={{ backgroundColor: "#333" }}
            sx={{ padding: "8px 16px !important" }}
            width="max-content"
            size="sm"
          >
            View
          </Button>
        </Link>
      </Flex>
    </GridItem>
  )
}
