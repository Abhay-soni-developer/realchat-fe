import axios from 'axios'

const getCountryList = function () {
    return axios.get('/countryList')
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})
}


export default {
    getCountryList
}