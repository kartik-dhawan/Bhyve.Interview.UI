import { getArticles } from "@/actions/getArticles"
import CustomHeading from "@/components/CustomHeading"
import Preloader from "@/redux/preloader"
import { saveArticlesData } from "@/redux/slices/articlesSlice"
import store from "@/redux/store"

export default async function Home() {
  const articles = await getArticles({ page: 1, limit: 10 })
  store.dispatch(saveArticlesData(articles))

  return (
    <main>
      <Preloader data={{ articles }} />
      <CustomHeading
        title="Follow what's brand new in digital design."
        subtitle="Blogs and articles."
        extraText="Don't miss the <b>latest</b> happenings on <b>awwwards.</b>"
      />
    </main>
  )
}
