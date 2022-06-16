import { useMemo } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

export const useRouter = () => {
	const params = useParams()
	const location = useLocation()
	const navigate = useNavigate()

	const query = useMemo(() => queryString.parse(location.search), [location.search])

	const push = useMemo(() => (path: string, state: any) => navigate(path, { state }), [navigate])
	const replace = useMemo(
		() => (path: string, state: any) => navigate(path, { replace: true, state }),
		[navigate]
	)
	const go = useMemo(() => (n: number) => navigate(n), [navigate])
	const goBack = useMemo(() => () => navigate(-1), [navigate])
	const goForward = useMemo(() => () => navigate(1), [navigate])

	return {
		params,
		location,
		history,
		query,
		push,
		replace,
		go,
		goBack,
		goForward
	}
}
