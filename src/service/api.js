import axios from 'axios'
import { ApiResponse } from '../type/api.response.js'

export class Api {
    #api

    constructor() {
        this.#api = 'https://earthquake.usgs.gov/fdsnws/event/1'
    }

    #url(endpoint, queryParameters) {
        let url = new URL(`${this.#api}/${endpoint}`)
        url.searchParams.append('format', 'geojson')
        Object.entries(queryParameters).forEach(entry => {
            let [key, value] = entry
            url.searchParams.append(key, value)
        })
        return url.toString()
    }

    #call(method, url, data) {
        return axios({
            method,
            url,
            data
        })
    }

    getQuakers(parameters = {}) {
        return this.#call(
            'get',
            this.#url('query', parameters)
        ).then(function (response) {
            return new ApiResponse(response.data)
        }).catch(function (e) {
            console.error(e.message)
        })
    }
}