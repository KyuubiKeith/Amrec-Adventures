export const BrandIdentity = []

export const MetaData = []

export const Ids = [1, 2, 3, 4]

export const Pages = [
  {
    id: 1,
    slug: 'home',
    title: 'Amrec Adventures',
    content: 'Welcome To Amrec Adventures'
  },
  {
    id: 2,
    slug: 'about',
    title: 'About Us',
    content: 'About Us Content'
  },
  {
    id: 3,
    slug: 'contact',
    title: 'Contact Us',
    content: 'Contact Page Content'
  },
  {
    id: 4,
    slug: 'packages',
    title: 'Packages Offered'
    // content: [
    //   {
    //     id: 1,
    //     slug: 'package-1',
    //     title: 'Package 1',
    //     content: 'Package Content'
    //   },
    //   ,
    //   {
    //     id: 2,
    //     slug: 'package-2',
    //     title: 'Package 2',
    //     content: 'Package Content'
    //   },
    //   {
    //     id: 3,
    //     slug: 'package-3',
    //     title: 'package 3',
    //     content: 'Package Content'
    //   },
    //   {
    //     id: 4,
    //     slug: 'package-4',
    //     title: 'Package 4',
    //     content: 'Package Content'
    //   },
    //   {
    //     id: 5,
    //     slug: 'package-5',
    //     title: 'Package 5',
    //     content: 'Package Content'
    //   }
    // ]
  }
]

export type TypePages = TypePagesFields

export interface TypePagesFields {
  id: number
  title: string
  slug: string
  content?: any | undefined
  pages: TypePagesFields
  page: TypePagesFields
  fields: TypePagesFields
  map: any
}
