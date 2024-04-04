"use client"

import { RootType } from "@/redux/store"
import { Articles } from "@/utils/interfaces"
import { Box, Divider, Grid, Stack, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ArticleCard from "./ArticleCard"
import { useInView } from "react-intersection-observer"
import { getArticles } from "@/actions/getArticles"
import { saveArticlesData } from "@/redux/slices/articlesSlice"

export default function ArticlesSection() {
  const { articles } = useSelector((state: RootType) => state.articlesSlice)
  const { ref, inView } = useInView()

  const dispatch = useDispatch()

  const [pageOffset, setPageOffset] = useState<number>(1)
  const [loader, setLoader] = useState<boolean>(true)

  // increases the offset by 1 everytime user reaches the end of the page
  useEffect(() => {
    if (inView) setPageOffset((state) => (state += 1))
  }, [inView])

  // fetches 10 more records everytime user reaches end of the page & adds it in redux
  useEffect(() => {
    getArticles({ page: pageOffset, limit: 10 })
      .then((res) => {
        // if there are new records append it in reduc articles state
        if (res.length !== 0) dispatch(saveArticlesData(res))
        // if not, stop loading
        else setLoader(false)
      })
      .catch(() => {
        setLoader(false)
      })
  }, [pageOffset])

  return (
    <Box sx={{ margin: "1rem 2rem" }}>
      <Box>Filter</Box>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={8}
      >
        {articles.map((item: Articles, index: number) => {
          return (
            <Stack key={item.id + index} gap={6}>
              <Divider sx={{ width: "100%", border: "0.5px solid #a9a9a9" }} />
              <ArticleCard article={item} />
            </Stack>
          )
        })}
      </Grid>
      {loader && (
        <Text textAlign="center" my={6} ref={ref}>
          Loading...
        </Text>
      )}
    </Box>
  )
}
