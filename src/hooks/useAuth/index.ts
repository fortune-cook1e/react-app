import { useSelector, useDispatch } from 'react-redux'
import { userSelector, doLogin, doLogout, doRegister } from '@/store/slices/user'
import { LoginRequest } from '@/types'

export const useAuth = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(userSelector)

	return {
		isUserLogin: !!user,
		login: (data: LoginRequest) => dispatch(doLogin(data)),
		logout: () => dispatch(doLogout()),
		register: (data: LoginRequest) => dispatch(doRegister(data))
	}
}
