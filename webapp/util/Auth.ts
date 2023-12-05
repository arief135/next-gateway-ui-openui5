const TOKEN_PARAM = 'token'

let token: string = null

export const isAuthenticated = () => {
    return getToken() !== null
}

export const login = (token: string) => {
    localStorage.setItem(TOKEN_PARAM, token)
}

export const logout = () => {
    localStorage.removeItem(TOKEN_PARAM)
    token = null
}

export const getToken = () => {
    if (!token) {
        token = localStorage.getItem(TOKEN_PARAM)
    }
    return token
} 