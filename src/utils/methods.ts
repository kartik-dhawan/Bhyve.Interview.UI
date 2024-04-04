import axios from "axios"
import { RequestMethod } from "./interfaces"
import { API_PATHS } from "./apiConstants"

/**
 *
 * @param {RequestMethod} method
 * @param {URL} url
 * @returns
 */
export const makeRequest = async (
  method: RequestMethod,
  url: string,
  body?: any,
) => {
  const response = await axios.request({
    method,
    url,
    data: body,
  })

  return response.data
}

/**
 * a function that hits the GET api at /articles to fetch all the articles
 * */
export const getAllArticles = async () => {
  const data = await makeRequest("GET", API_PATHS.ARTICLES)
  return data
}

/**
 * a function that hits the GET api at /articles/:id to fetch one specific articles
 *
 * @param {number} articleId
 * @returns
 */
export const getArticleById = async (articleId: number) => {
  const data = makeRequest("GET", `${API_PATHS.ARTICLES}/${articleId}`)
  return data
}

/**
 *  a function that hits the POST api at /articles to add an articles to the DB
 *
 * @param {Object} payload
 * @returns
 */
export const addAnArticle = async (payload: any) => {
  const data = await makeRequest("POST", API_PATHS.ARTICLES, payload)

  return data
}

/**
 * a function that hits the DELETE api at /articles/:id to delete one specific articles
 *
 * @param {number} articleId
 * @returns
 */
export const deleteAnArticle = async (articleId: number) => {
  const data = await makeRequest("DELETE", `${API_PATHS.ARTICLES}/${articleId}`)
  return data
}

/**
 * a function that hits the PUT api at /articles/:id to update one specific articles
 *
 * @param {number} articleId
 * @param {Object} payload
 * @returns
 */
export const updateAnArticle = async (articleId: number, payload: any) => {
  const data = makeRequest("PUT", `${API_PATHS.ARTICLES}/${articleId}`, payload)
  return data
}

/**
 *
 * @param {Object} obj
 * @returns {string}
 */
export const objectToQueryString = (obj: any): string => {
  const keys = Object.keys(obj)
  const keyValuePairs = keys.map((key) => {
    return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
  })
  return keyValuePairs.join("&")
}
