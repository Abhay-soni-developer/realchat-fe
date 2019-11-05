const axios = require('axios')

const config = {
    baseURL: process.env.REACT_APP_API_URL
}

axios.defaults = {
    ...config,
    ...axios.defaults
}
