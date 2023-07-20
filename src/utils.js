import axios from 'axios'

  export const defaultURL = axios.create({
    baseURL: 'https://ollies-nc-news.onrender.com/api'
  })

  export function getArticles(topic) {
    return defaultURL.get('/articles', {
          params : { topic: topic },
        })
        .then(({data})=>{
          return data.articles
        })
  }

  export function getArticlesById(id) {
    return defaultURL.get(`/articles/${id}`)
    .then(({data})=>{
      return data.article
    })
  }

  export function getCommentsById(id) {
    return defaultURL.get(`/articles/${id}/comments`)
    .then(({data})=>{
      return data.comments
    })
  }

  export function getAllTopics() {
    return defaultURL.get('/topics')
    .then(({data})=>{
      return data.topics
    })
  }

  export function patchArticleVotes(id, vote) {
    return defaultURL.patch(`articles/${id}`, {
          inc_votes: vote
        })
        .then(({data})=>{
          return data.article
        })
  }