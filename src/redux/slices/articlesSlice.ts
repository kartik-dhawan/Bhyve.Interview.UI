import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const articlesSlice = createSlice({
  name: "Articles",
  initialState,
  reducers: {
    saveArticlesData: () => {
      console.log("Saved")
    },
  },
})

export const { saveArticlesData } = articlesSlice.actions
export default articlesSlice.reducer
