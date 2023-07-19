import axios from 'axios'

  export const defaultURL = axios.create({
    baseURL: 'https://ollies-nc-news.onrender.com/api'
  })

  export function getArticles(topic) {
    return defaultURL.get('/articles', {
          params : { topic: topic },
        })
  }

  export function getArticlesById(id) {
    return defaultURL.get(`/articles/${id}`)
  }

  export function getCommentsById(id) {
    return defaultURL.get(`/articles/${id}/comments`)
  }

  export function getAllTopics(topic) {
    return defaultURL.get('/topics')
  }