"use client"

import React, { useEffect, useState } from "react"
import {
  Flex,
  Input,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  ScaleFade,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { styles } from "./styles"
import Link from "next/link"
import { GITHUB_URL, PORTFOLIO_URL } from "@/utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { Articles } from "@/utils/interfaces"
import { getAllArticles } from "@/utils/methods"
import { setSearchResults } from "@/redux/slices/articlesSlice"
import { RootType } from "@/redux/store"
import SearchSection from "../SearchSection"

export default function Navbar() {
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState<string>("")

  // sets search results in redux state
  useEffect(() => {
    if (searchText && searchText !== "") {
      getAllArticles().then((res) => {
        const searchResults: Articles[] = [...res].filter((item: Articles) => {
          return item.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
        })
        console.log(searchResults)

        dispatch(setSearchResults(searchResults))
      })
    } else {
      dispatch(setSearchResults([]))
    }
  }, [searchText])

  const { searchedArticles } = useSelector(
    (state: RootType) => state.articlesSlice,
  )

  return (
    <Flex gap={4}>
      <Text fontSize="3xl" fontWeight={600} color="#222">
        Art.
      </Text>

      {/* navbar search input */}
      <InputGroup position="relative">
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
          onChange={(e) => {
            e.preventDefault()
            setSearchText(e.target.value)
          }}
          value={searchText}
        />

        {/* search section which appears if it matches any record in db */}
        <ScaleFade
          initialScale={0.9}
          in={searchedArticles.length !== 0}
          style={{ position: "absolute", left: 0, top: "100%", width: "100%" }}
        >
          <SearchSection
            searchedArticles={searchedArticles}
            setSearchText={setSearchText}
          />
        </ScaleFade>
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
