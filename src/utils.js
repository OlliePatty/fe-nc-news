import axios from 'axios'

  export const defaultURL = axios.create({
    baseURL: 'https://ollies-nc-news.onrender.com/api'
  })

  export function getAllArticles() {
    return defaultURL.get('/articles')
  }

  export function getArticlesById(id) {
    return defaultURL.get(`/articles/${id}`)
  }

  export function getCommentsById(id) {
    return defaultURL.get(`/articles/${id}/comments`)
  }

  export function getAllTopics() {
    return defaultURL.get('/topics')
  }