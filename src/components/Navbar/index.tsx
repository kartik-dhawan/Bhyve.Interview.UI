"use client"

import React from "react"
import {
  Flex,
  Input,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { styles } from "./styles"
import Link from "next/link"
import { GITHUB_URL, PORTFOLIO_URL } from "@/utils/constants"

export default function Navbar() {
  return (
    <Flex gap={4}>
      <Text fontSize="3xl" fontWeight={600} color="#222">
        Art.
      </Text>

      {/* navbar search input */}
      <InputGroup>
        <InputLeftElement>
          <SearchIcon sx={styles.navbarSearchIcon} />
        </InputLeftElement>
        <Input
          placeholder="Search the app for articles."
          size="lg"
          type="outline"
          sx={{ backgroundColor: "#d2d2d2", color: "#888" }}
          focusBorderColor="#e9e9e9"
          textColor="#d2d2d2"
        />
      </InputGroup>

      {/* navbar action buttons */}
      <Link href={GITHUB_URL} target="_blank">
        <Button
          size="lg"
          backgroundColor="#222"
          colorScheme="#e9e9e9"
          variant="solid"
          fontWeight={400}
          _hover={{ backgroundColor: "#333" }}
          sx={styles.primaryButtons}
        >
          Github
        </Button>
      </Link>
      <Link href={PORTFOLIO_URL} target="_blank">
        <Button
          variant="outline"
          size="lg"
          colorScheme="#222"
          fontWeight={400}
          py={2}
          _hover={{ backgroundColor: "#2222221b" }}
          display={{ base: "none", sm: "flex" }}
          sx={styles.primaryButtons}
        >
          Portfolio
        </Button>
      </Link>
    </Flex>
  )
}
