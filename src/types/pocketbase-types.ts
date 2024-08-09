/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Posts = "posts",
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

export type PostsRecord = {
	category?: string
	img?: string
	sections?: RecordIdString[]
	title?: string
	views?: string
	// created?: IsoDateString
}

export type SectionsRecord = {
	heading?: string
	position?: number
	post?: RecordIdString
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type PostsResponse<Texpand = unknown> = Required<PostsRecord> & BaseSystemFields<Texpand>
export type SectionsResponse<Texpand = unknown> = Required<SectionsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	posts: PostsRecord
	sections: SectionsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	posts: PostsResponse
	sections: SectionsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'posts'): RecordService<PostsResponse>
	collection(idOrName: 'sections'): RecordService<SectionsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
