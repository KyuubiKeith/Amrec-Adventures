// ==================== Imports =====================//

import { createClient } from 'contentful'

import * as CFRichTextTypes from '@contentful/rich-text-types'
import * as Contentful from 'contentful'

// ==================== Imports =====================//

//

// ==================== Client =====================//
export const Client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ''
})
// ==================== Client =====================//

//

// ==================== Types =====================//
export type TypePackages = Contentful.Entry<TypePackagesFields>
export type TypePages = Contentful.Entry<TypePagesFields>
// ==================== Types =====================//

//

// ==================== Interfaces =====================//
export interface TypePackagesFields {
  Id: Contentful.EntryFields.Integer
  title: Contentful.EntryFields.Symbol
  slug?: Contentful.EntryFields.Symbol
  fields: TypePackagesFields
  _package: TypePackagesFields
  map: any
  sort: any
}

export interface TypePagesFields {
  title: Contentful.EntryFields.Symbol
  slug?: Contentful.EntryFields.Symbol
  pageContent?: CFRichTextTypes.Block | CFRichTextTypes.Inline
  children: Element
  pages: TypePagesFields
  page: TypePagesFields
  fields: TypePagesFields
  map: any
}

// ==================== Interfaces =====================//
