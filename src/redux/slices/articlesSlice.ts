import { Articles } from "@/utils/interfaces"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ArticlesSliceState {
  articles: Articles[]
  currentArticle: Articles | null
  searchedArticles: Articles[]
}

const initialState: ArticlesSliceState = {
  articles: [],
  currentArticle: null,
  searchedArticles: [],
}

const articlesSlice = createSlice({
  name: "Articles",
  initialState,
  reducers: {
    saveArticlesData: (
      state: ArticlesSliceState,
      action: PayloadAction<Articles[]>,
    ) => {
      state.articles = state.articles.concat(action.payload)
    },

    saveCurrentArticle: (
      state: ArticlesSliceState,
      action: PayloadAction<Articles>,
    ) => {
      state.currentArticle = action.payload
    },

    setSearchResults: (
      state: ArticlesSliceState,
      action: PayloadAction<Articles[]>,
    ) => {
      state.searchedArticles = action.payload
    },
  },
})

export const { saveArticlesData, saveCurrentArticle, setSearchResults } =
  articlesSlice.actions
export default articlesSlice.reducer
