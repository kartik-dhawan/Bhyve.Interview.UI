import React from "react"

export interface ChildrenProps {
  children: React.ReactNode
}

export type RequestMethod = "GET" | "PUT" | "PATCH" | "POST" | "DELETE"

export type apiFetchOptions = {
  page: number
  limit: number
}

export type Articles = {
  createdAt: string
  productName: string
  avatar: string
  description: string
  name: string
  productPrice: string
  id: string
}
