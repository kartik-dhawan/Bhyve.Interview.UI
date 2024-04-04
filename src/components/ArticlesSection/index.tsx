"use client"

import { RootType } from "@/redux/store"
import { Articles } from "@/utils/interfaces"
import { Box, Divider, Grid, Stack } from "@chakra-ui/react"
import React from "react"
import { useSelector } from "react-redux"
import ArticleCard from "./ArticleCard"

export default function ArticlesSection() {
  const { articles } = useSelector((state: RootType) => state.articlesSlice)

  return (
    <Box sx={{ margin: "1rem 2rem" }}>
      <Box>Filter</Box>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={8}
      >
        {articles.map((item: Articles) => {
          return (
            <Stack key={item.id} gap={6}>
              <Divider sx={{ width: "100%", border: "0.5px solid #a9a9a9" }} />
              <ArticleCard article={item} />
            </Stack>
          )
        })}
      </Grid>
    </Box>
  )
}
