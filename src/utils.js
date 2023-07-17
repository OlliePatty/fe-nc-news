import axios from 'axios'

export const defaultURL = axios.create({
    baseURL: 'https://ollies-nc-news.onrender.com/api'
  })