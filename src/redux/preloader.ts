"use client"

import { useRef } from "react"
/**
 * since we're using redux on both server and client side differently,
 * the client side state management gets initialized (with their initial state probably null)
 * after the pages from server are recevied.
 *
 * to make data consistent, we need to set initial data on client's state management as the data received from the server
 *
 * this component does exactly that.
 *
 * STEPS:
 * - the data you dispatch in the server component, pass the same data inside preloader component.
 *
 * Ref: https://www.youtube.com/watch?v=dRLjoT4r-jc
 */

import store from "./store"
import { saveArticlesData } from "./slices/articlesSlice"

const Preloader = ({ data }: any) /* eslint-disable-line */ => {
  const loaded = useRef(false)

  if (!loaded.current) {
    // dispatch data from the server to all the slices as required
    if (data.articles) store.dispatch(saveArticlesData(data.articles))
    loaded.current = true
  }

  return null
}

export default Preloader

/**
 * USAGE
 *
 * <preloader/> syncs server side redux store to client side store
 *
 *    <Preloader
 *        data={{
 *        content,
 *        projects: content.projectDetails,
 *        experiences: content.experienceTimelineEvent,
 *      }}
 * />
 *
 */
