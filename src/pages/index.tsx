import React from 'react'

import { Header } from '../sections/Header'
import { Projects } from '../sections/Projects'
import { About } from '../sections/About'

import AboutStore from '../store/about'
import WorkStore from '../store/work'
import { post } from '../helper/fetch'
import { graphqlApi } from 'src/config'

export default function Web(props: any) {
  console.log(props)
  return (
    <div>
      <React.Fragment>
        <div id="webgl" style={{ height: '100vh', width: '100vw' }}>
          <Header />
        </div>

        <AboutStore>
          <About />
        </AboutStore>

        <WorkStore>
          <Projects />
        </WorkStore>
      </React.Fragment>
    </div>
  )
}

// export async function getStaticProps() {
//   const { method, headers } = graphqlApi
//   const result = await post('http://localhost:1337/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: `
//       query {
//         categories {
//           data {
//             id
//             attributes {
//               name
//             }
//           }
//         }
//       }

//         `,
//       variables: {
//         now: new Date().toISOString(),
//       },
//     }),
//   })
//   // const res = await result.json()
//   // .then((result) => console.log(result))
//   // .then((result) => result)
//   return {
//     props: {
//       result,
//     },
//   }
// }

export async function getStaticProps() {
  const { method, headers } = graphqlApi

  // const [aboutmeSection, aboutMeTopiAndContent, projectCategories, projects] = await Promise.all([
  //   post(graphqlApi.endpoint, {
  //     method,
  //     headers,
  //     body: graphqlApi.aboutmeSectionQuery,
  //   }),
  //   post(graphqlApi.endpoint, {
  //     method,
  //     headers,
  //     body: graphqlApi.aboutMeTopiAndContent,
  //   }),
  //   post(graphqlApi.endpoint, {
  //     method,
  //     headers,
  //     body: graphqlApi.projectCategoriesQuery,
  //   }),
  //   post(graphqlApi.endpoint, {
  //     method,
  //     headers,
  //     body: graphqlApi.projectQuery,
  //   }),
  // ])

  return {
    props: {
      // aboutmeSection,
      // aboutMeTopiAndContent,
      // projectCategories,
      // projects,
    },
  }
}
