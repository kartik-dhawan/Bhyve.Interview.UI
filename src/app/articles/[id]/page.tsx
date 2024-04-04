import ArticleDetails from "@/components/ArticleDetails"
import CustomHeading from "@/components/CustomHeading"
import ReduxProvider from "@/redux/ReduxProvider"
import Preloader from "@/redux/preloader"
import { saveCurrentArticle } from "@/redux/slices/articlesSlice"
import store from "@/redux/store"
import { Articles } from "@/utils/interfaces"
import { getArticleById } from "@/utils/methods"
import React from "react"

export default async function ArticlePage({ params }: any) {
  const currentArticle: Articles = await getArticleById(params.id)
  store.dispatch(saveCurrentArticle(currentArticle ?? null))

  return (
    <main>
      <CustomHeading
        title={currentArticle.productName}
        subtitle={currentArticle.name}
        extraText={currentArticle.description}
      />
      <Preloader data={{ currentArticle }} />

      {/* wrapping client components which uses redux states/store with a provider separately */}
      <ReduxProvider>
        <ArticleDetails />
      </ReduxProvider>
    </main>
  )
}
