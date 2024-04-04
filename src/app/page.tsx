import { getArticles } from "@/actions/getArticles"
import ArticlesSection from "@/components/ArticlesSection"
import CustomHeading from "@/components/CustomHeading"
import ReduxProvider from "@/redux/ReduxProvider"
import Preloader from "@/redux/preloader"
import { saveArticlesData } from "@/redux/slices/articlesSlice"
import store from "@/redux/store"

export default async function Home() {
  let articles = []

  // only fetch data if the redux store is empty
  if (store.getState().articlesSlice.articles.length === 0) {
    articles = await getArticles({ page: 1, limit: 10 })
    store.dispatch(saveArticlesData(articles))
  }

  return (
    <main>
      <Preloader data={{ articles }} />
      <CustomHeading
        title="Follow what is in your mind in this very moment."
        subtitle="Blogs and articles."
        extraText="Don't miss the <b>latest</b> happenings on <b>this website.</b>"
      />
      <ReduxProvider>
        <ArticlesSection />
      </ReduxProvider>
    </main>
  )
}
