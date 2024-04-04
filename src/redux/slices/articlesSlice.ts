import { Articles } from "@/utils/interfaces"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ArticlesSliceState {
  articles: Articles[]
  currentArticle: Articles | null
}

const initialState: ArticlesSliceState = {
  articles: [],
  currentArticle: null,
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
  },
})

export const { saveArticlesData, saveCurrentArticle } = articlesSlice.actions
export default articlesSlice.reducer
