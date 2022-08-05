import Dexie, { Table } from 'dexie'

export interface People {
	name: string
	age: number
	isMale: boolean
}

export class PeopleDataBase extends Dexie {
	// 'friends' is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	people!: Table<People>

	constructor() {
		super('myReactAppDataBase')
		this.version(1).stores({
			people: '++id,name,age,isMale' // Primary key and indexed props
		})
	}
}

export const db = new PeopleDataBase()
