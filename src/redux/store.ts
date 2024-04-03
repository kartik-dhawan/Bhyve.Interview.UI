import { configureStore } from "@reduxjs/toolkit"
import articlesSlice from "./slices/articlesSlice"

const store = configureStore({
  reducer: {
    articlesSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>
export default store
