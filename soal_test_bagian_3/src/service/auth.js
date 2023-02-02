import Api from '@/utils/api.js'

class AuthServices {
    async login({
        payload
    }) {
        const res = await Api.doPost(`login`, payload)
        // console.debug('GET FETCH', res)
        return res
    }

    async register({
        payload
    }) {
        const res = await Api.doPost(`register`, payload)
        // console.debug('GET FETCH', res)
        return res
    }


    async logout() {
        const res = await Api.doPost(`v1/logout`)

        return res
    }
}

export default new AuthServices()