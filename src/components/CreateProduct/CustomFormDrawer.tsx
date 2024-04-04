import { Articles } from "@/utils/interfaces"
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
} from "@chakra-ui/react"
import React, { Dispatch, SetStateAction, useCallback } from "react"

interface CustomFormDrawerProps {
  isOpen: any
  onClose: any
  formData: Articles
  setFormData: Dispatch<SetStateAction<Articles>>
  submitHandler: any
  isLoader: any
  isEditForm?: boolean
}

export default function CustomFormDrawer({
  isOpen,
  onClose,
  formData,
  setFormData,
  submitHandler,
  isLoader,
  isEditForm,
}: CustomFormDrawerProps) {
  const setDataFromInput = useCallback(
    (e: any, field: string) => {
      e.preventDefault()
      setFormData({
        ...formData,
        [field]: e.target.value,
      })
    },
    [formData],
  )

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          Create a new account
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="username">Name</FormLabel>
              <Input
                id="username"
                placeholder="Please enter user name"
                onChange={(e) => {
                  setDataFromInput(e, "name")
                }}
                value={formData.name}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="prod_name">Product Name</FormLabel>
              <Input
                id="productname"
                placeholder="Please enter Product name"
                onChange={(e) => {
                  setDataFromInput(e, "productName")
                }}
                value={formData.productName}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="prod_price">Product Price</FormLabel>
              <Input
                id="productprice"
                placeholder="Please enter Product price"
                onChange={(e) => {
                  setDataFromInput(e, "productPrice")
                }}
                value={formData.productPrice}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="prod_description">
                Product Description
              </FormLabel>
              <Textarea
                id="productdescription"
                placeholder="Please enter Product description"
                onChange={(e) => {
                  setDataFromInput(e, "description")
                }}
                value={formData.description}
              />
            </Box>

            <Box>
              <FormLabel htmlFor="url">Avatar Url</FormLabel>
              <InputGroup>
                <InputLeftAddon>https://</InputLeftAddon>
                <Input
                  type="url"
                  id="url"
                  placeholder="Please enter domain"
                  onChange={(e) => {
                    setDataFromInput(e, "avatar")
                  }}
                  value={formData.avatar}
                />
              </InputGroup>
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            backgroundColor="#222"
            _hover={{ backgroundColor: "#333" }}
            onClick={submitHandler}
          >
            {isLoader ? "Wait a minute..." : isEditForm ? "Update" : "Create"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
