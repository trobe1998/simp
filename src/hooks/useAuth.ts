import {useContext} from 'react'
import AuthProvider from './authProvider'
const useAuth = () => {
    return useContext(AuthProvider)
}

export default useAuth