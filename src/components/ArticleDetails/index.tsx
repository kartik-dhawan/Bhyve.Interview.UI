"use client"

import { RootType } from "@/redux/store"
import {
  Avatar,
  Button,
  CircularProgress,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import React, { useCallback, useState } from "react"
import { useSelector } from "react-redux"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { deleteAnArticle } from "@/utils/methods"
import { styles } from "./styles"
import { useRouter } from "next/navigation"

export default function ArticleDetails() {
  const router = useRouter()

  const { currentArticle } = useSelector(
    (state: RootType) => state.articlesSlice,
  )

  const [loader, setLoader] = useState(false)

  const deleteArticleHandler = useCallback(() => {
    setLoader(true)
    if (currentArticle) {
      deleteAnArticle(currentArticle.id).then(() => {
        router.push("/")
      })
    }
  }, [])

  return (
    <Flex
      mx={8}
      justifyContent="space-between"
      sx={styles.articleDetailsSection}
    >
      {/* details */}
      <Wrap color="#777" fontWeight={500}>
        <WrapItem textDecoration="underline">#{currentArticle?.id}</WrapItem>
        <WrapItem>{"//"}</WrapItem>
        <WrapItem>${currentArticle?.productPrice}</WrapItem>
      </Wrap>

      {/* action items */}
      <Wrap sx={{ "& ul": { justifyContent: "flex-end" } }}>
        <WrapItem>
          <Button variant="solid" size="lg" sx={styles.editDeleteIconButtons}>
            <EditIcon />
          </Button>
        </WrapItem>
        <WrapItem>
          {loader ? (
            <CircularProgress isIndeterminate color="green.300" />
          ) : (
            <Button
              variant="solid"
              size="lg"
              sx={styles.editDeleteIconButtons}
              onClick={deleteArticleHandler}
            >
              <DeleteIcon />
            </Button>
          )}
        </WrapItem>
        <WrapItem>
          <Avatar name={currentArticle?.name} src={currentArticle?.avatar} />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
