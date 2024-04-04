"use client"

import { RootType } from "@/redux/store"
import {
  Avatar,
  Button,
  CircularProgress,
  Flex,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react"
import React, { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { deleteAnArticle, updateAnArticle } from "@/utils/methods"
import { styles } from "./styles"
import { useRouter } from "next/navigation"
import CustomFormDrawer from "../CreateProduct/CustomFormDrawer"
import { INITIAL_FORM_STATE } from "@/utils/constants"
import { Articles } from "@/utils/interfaces"
import { saveCurrentArticle } from "@/redux/slices/articlesSlice"

export default function ArticleDetails() {
  const router = useRouter()
  const dispatch = useDispatch()

  const { currentArticle } = useSelector(
    (state: RootType) => state.articlesSlice,
  )

  const [loader, setLoader] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isFormLoader, setIsFormLoader] = useState(false)

  const [formData, setFormData] = useState<Articles>(
    currentArticle ?? INITIAL_FORM_STATE,
  )

  // deletes an article
  const deleteArticleHandler = useCallback(() => {
    setLoader(true)
    if (currentArticle) {
      deleteAnArticle(currentArticle.id).then(() => {
        router.push("/")
      })
    }
  }, [])

  // updates the article in DB using the API
  const editProductHandler = useCallback(() => {
    setIsFormLoader(true)
    updateAnArticle(formData.id, formData).then(() => {
      setIsFormLoader(false)
      dispatch(saveCurrentArticle(formData))
      onClose()
    })
  }, [formData])

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
          <Button
            variant="solid"
            size="lg"
            sx={styles.editDeleteIconButtons}
            onClick={onOpen}
          >
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

      {/* edit drawer */}
      <CustomFormDrawer
        isLoader={isFormLoader}
        isOpen={isOpen}
        onClose={onClose}
        submitHandler={editProductHandler}
        formData={formData}
        setFormData={setFormData}
        isEditForm
      />
    </Flex>
  )
}
