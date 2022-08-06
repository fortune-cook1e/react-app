import localforage from 'localforage'

interface UseIndexedDbResponse {
	setItem: <T>(key: string, value: T) => Promise<T>
	getItem: <T>(key: string) => Promise<T>
	removeItem: (key: string) => Promise<void>
	clear: () => Promise<void>
}

const useIndexedDb = (): UseIndexedDbResponse => {
	const setItem = <T>(key: string, value: T): Promise<T> => {
		return localforage.setItem(key, value)
	}

	const getItem = <T>(key: string): Promise<T> => {
		return localforage.getItem(key) as Promise<T>
	}

	const removeItem = (key: string): Promise<void> => {
		return localforage.removeItem(key)
	}

	const clear = (): Promise<void> => {
		return localforage.clear()
	}

	return {
		setItem,
		getItem,
		removeItem,
		clear
	}
}

export default useIndexedDb
