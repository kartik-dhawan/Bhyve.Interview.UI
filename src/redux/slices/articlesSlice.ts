import { Articles } from "@/utils/interfaces"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ArticlesSliceState {
  articles: Articles[]
}

const initialState: ArticlesSliceState = {
  articles: [],
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
  },
})

export const { saveArticlesData } = articlesSlice.actions
export default articlesSlice.reducer
