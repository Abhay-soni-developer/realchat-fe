const axios = require('axios')

const config = {
    baseURL: process.env.API_URL
}

axios.defaults = {
    ...config,
    ...axios.defaults
}

export default axios