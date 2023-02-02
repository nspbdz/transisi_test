import {
    ref,
    computed
} from 'vue'
import {
    defineStore
} from 'pinia'
import SERVICE from "@/service/auth.js"

export const useAuthStore = defineStore('auth', () => {

    const isAuth = ref(localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : "")
    // const isUser = ref(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : "")

    const getIsAuth = computed(() => isAuth.value)
    const getIsUser = computed(() => isUser.value)

    const setAuth = (data) => {
        isAuth.value = data
    }

    // const setUser = (data) => {
    //     isUser.value = data
    // }

    async function login(payload) {
        try {
            const res = await SERVICE.login({
                payload
            })

            console.log("res", res)

            localStorage.setItem('auth_token', res.token)
            // localStorage.setItem('user', JSON.stringify(res.data.user))

            setAuth(res.token)
            // setAuth(res.data.user)

            window.location.reload()

            return res
        } catch (error) {
            console.error(error)
        }
    }

    async function register(payload) {
        try {
            const res = await SERVICE.register({
                payload
            })

            console.log("res", res)

            localStorage.setItem('auth_token', res.token)
            // localStorage.setItem('user', JSON.stringify(res.data.user))

            setAuth(res.token)
            // setAuth(res.data.user)

            window.location.reload()

            return res
        } catch (error) {
            console.error(error)
        }
    }

    async function logout() {
        try {
            await SERVICE.logout()

            // setUser("")
            setAuth("")
            localStorage.removeItem('auth_token')
            // localStorage.removeItem('user')

            window.location.reload()
        } catch (error) {
            console.error(error)
        }



    }

    return {
        getIsAuth,
        getIsUser,
        register,
        login,
        logout
    }
})