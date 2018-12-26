
import axios from 'axios'

const API = {
  _core (url, data = {}, method = 'GET', headers = { 'Content-Type': 'application/json' }) {
    let options = {
      url,
      method,
      headers
    }
    if (method === 'GET') {
      options.params = data
    } else {
      options.data = data
    }
    return axios(options).then(results => {
      return Promise.resolve(results)
    }).catch(function (error) {
      let data = error.response.data
      return Promise.reject(data)
    })
  },
  get (url, data, headers) {
    return this._core(url, data, 'GET', headers)
  },
  post (url, data, headers) {
    return this._core(url, data, 'POST', headers)
  },
  delete (url, data, headers) {
    return this._core(url, data, 'DELETE', headers)
  }
}

export default API
