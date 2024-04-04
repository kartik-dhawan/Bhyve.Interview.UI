"use client"

import { AddIcon } from "@chakra-ui/icons"
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  DrawerFooter,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react"

export default function CreateEditProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
                <Input id="username" placeholder="Please enter user name" />
              </Box>
              <Box>
                <FormLabel htmlFor="prod_name">Product Name</FormLabel>
                <Input
                  id="productname"
                  placeholder="Please enter Product name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="prod_price">Product Price</FormLabel>
                <Input
                  id="productprice"
                  placeholder="Please enter Product price"
                  type="number"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="prod_description">
                  Product Description
                </FormLabel>
                <Textarea
                  id="productdescription"
                  placeholder="Please enter Product description"
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
                  />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
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
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
