import { Flex, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { styles } from "./styles"

interface CustomHeadingProps {
  title: string
  subtitle: string
  extraText: string
}

export default function CustomHeading({
  title,
  subtitle,
  extraText,
}: CustomHeadingProps) {
  return (
    <Flex sx={styles.customHeadingWrapper}>
      <Stack sx={styles.customHeadingTitleWrapper} gap={4}>
        <Text fontSize="md">{subtitle}</Text>
        <Text
          fontSize="6xl"
          fontWeight={500}
          letterSpacing="-2px"
          lineHeight="56px"
        >
          {title}
        </Text>
      </Stack>
      <Text color="#222" dangerouslySetInnerHTML={{ __html: extraText }} />
    </Flex>
  )
}
