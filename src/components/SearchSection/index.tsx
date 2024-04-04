import { Articles } from "@/utils/interfaces"
import {
  Avatar,
  Button,
  Flex,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { styles } from "./styles"
import { useDispatch } from "react-redux"
import { setSearchResults } from "@/redux/slices/articlesSlice"

interface SearchSectionProps {
  searchedArticles: Articles[]
  setSearchText: any
}

export default function SearchSection({
  searchedArticles,
  setSearchText,
}: SearchSectionProps) {
  const dispatch = useDispatch()

  return (
    <Stack>
      <List sx={styles.searchCardList}>
        {searchedArticles.map((item: Articles) => {
          return (
            <ListItem sx={styles.searchCardListItem} key={item.id}>
              <Link href={`/articles/${item.id}`}>
                <Flex gap={3} p={3}>
                  <Avatar name={item.name} src={item.avatar} />
                  <Stack>
                    <Text fontSize="lg" fontWeight={600}>
                      {item.name}
                    </Text>
                    <Text fontSize="sm" noOfLines={2}>
                      {item.description}
                    </Text>
                  </Stack>
                </Flex>
              </Link>
            </ListItem>
          )
        })}
      </List>
      <Button
        variant="solid"
        color="#e9e9e9"
        backgroundColor="#222"
        _hover={{ backgroundColor: "#333" }}
        onClick={() => {
          dispatch(setSearchResults([]))
          setSearchText("")
        }}
      >
        Clear
      </Button>
    </Stack>
  )
}
