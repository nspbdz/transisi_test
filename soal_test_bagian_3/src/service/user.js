import Api from '@/utils/api.js'

class UserServices {
    async getUser() {
        const res = await Api.doGet(`users?page=2`)
        // console.debug('GET FETCH', res)
        return res
    }

    async detailUser({
        id
    }) {
        const res = await Api.doGet(`users/${id}`)
        return res
    }

    async createUser({
        payload
    }) {
        const formData = new FormData()
        formData.append('name', payload.name)
        formData.append('job', payload.job)

        const res = await Api.doPost(`users`, formData)
        return res
    }

    async updateUser({
        id,
        payload
    }) {

        const formData = new FormData()
        formData.append('name', payload.name)
        formData.append('job', payload.job)

        const res = await Api.doPut(`users/${id}`, payload)
        return res
    }

    async deleteUser({
        id
    }) {
        const res = await Api.doDelete(`users/${id}`)
        return res
    }
}

export default new UserServices()