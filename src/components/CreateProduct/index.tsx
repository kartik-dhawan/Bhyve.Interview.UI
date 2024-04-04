"use client"

import { saveArticlesData } from "@/redux/slices/articlesSlice"
import { Articles } from "@/utils/interfaces"
import { addAnArticle } from "@/utils/methods"
import { AddIcon } from "@chakra-ui/icons"
import { Button, useDisclosure } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import CustomFormDrawer from "./CustomFormDrawer"
import { INITIAL_FORM_STATE } from "@/utils/constants"

export default function CreateProduct() {
  const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoader, setIsLoader] = useState(false)

  const [formData, setFormData] = useState<Articles>(INITIAL_FORM_STATE)

  const createProductHandler = useCallback(() => {
    setIsLoader(true)
    addAnArticle({
      ...formData,
      createdAt: new Date().toLocaleDateString(),
    })
      .then((res) => {
        dispatch(saveArticlesData([res]))
        setIsLoader(false)
        onClose()
      })
      .catch(() => {
        console.log("Something went wrong.")
      })
  }, [formData])

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={onOpen}
        mx={8}
        marginBottom={4}
        backgroundColor="#222"
        _hover={{ backgroundColor: "#333" }}
      >
        Create user
      </Button>
      <CustomFormDrawer
        isLoader={isLoader}
        isOpen={isOpen}
        onClose={onClose}
        submitHandler={createProductHandler}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  )
}
