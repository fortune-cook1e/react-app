export interface AnyOptions {
	[prop: string]: any
}

export enum MockDataType {
	String = 'string',
	Number = 'number',
	Boolean = 'boolean'
}

export enum Env {
	Dev = 'development',
	Prod = 'production'
}
