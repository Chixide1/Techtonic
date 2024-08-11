/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Articles = "articles",
	Sections = "sections",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ArticlesRecord<T = never> = {
	category: string
	img: string
	sections?: RecordIdString[]
	title: string
	views?: number
} & BaseSystemFields<T>

export type SectionsRecord = {
	heading: string
	position: number
  content: string
	Article: RecordIdString
} & BaseSystemFields

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArticlesResponse<Texpand = unknown> = Required<ArticlesRecord> & BaseSystemFields<Texpand>
export type SectionsResponse<Texpand = unknown> = Required<SectionsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	articles: ArticlesRecord
	sections: SectionsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	articles: ArticlesResponse
	sections: SectionsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'articles'): RecordService<ArticlesResponse>
	collection(idOrName: 'sections'): RecordService<SectionsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
