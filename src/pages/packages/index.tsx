// ==================== Imports =====================//

// NextJS
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'

// Contentful Client
import { Client, TypePackagesFields } from '../../organisms/context/api/contentful'

// ==================== Imports =====================//

//

// ==================== Query =====================//

export const getStaticProps: GetStaticProps = async () => {
  const entries = await Client.getEntries({
    content_type: 'packages'
  })
  const fields = entries.items.map((_package) => _package.fields)

  return {
    props: {
      fields: fields
    },
    revalidate: 1
  }
}

// ==================== Query =====================//

//

// ==================== Render =====================//
const Packages: NextPage<TypePackagesFields> = ({ fields }) => {
  return (
    <>
      {fields
        .sort((a: { Id: number }, b: { Id: number }) => {
          return a.Id - b.Id
        })
        .map((_package: TypePackagesFields) => (
          <div
            key={_package.Id}
            className="section"
            data-anchor={_package.slug}
          >
            <header>
              <p>Package</p>
              <p>{_package.Id}</p>
            </header>

            <main>
              <p>{_package.slug}</p>
              <Link
                // href={`/_package/${project.slug}`}
                href={{
                  pathname: `/packages/${_package.slug}`
                }}
              >
                <a>Explore {_package.title}</a>
              </Link>
            </main>
          </div>
        ))}
    </>
  )
}

export default Packages
// ==================== Render =====================//
