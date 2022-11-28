import React, { useEffect, useState } from 'react'
import { InferGetStaticPropsType } from 'next'

import { Header } from '../sections/Header'
import { Projects } from '../sections/Projects'
import { About } from '../sections/About'
import Social from '../sections/Social'

import AboutStore from '../store/about'
import WorkStore from '../store/work'
import { post } from '../helper/fetch'
import { graphqlApi } from 'src/config'

import { Query } from '../types/index'

export default function Web(props: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(props)

  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 8000)
  }, [])

  return (
    <React.Fragment>
      <div id="webgl" style={{ height: '100vh', width: '100vw' }}>
        {/* <Header /> */}
        {show && (
          <div
            className="position-absolute"
            style={{ top: '70%', left: '50%', zIndex: '1', transform: 'translate(-50%,-70%)' }}>
            <h2>Click and Hold</h2>
          </div>
        )}
      </div>

      <AboutStore>
        <About />
      </AboutStore>

      <WorkStore>
        <Projects />
      </WorkStore>

      <Social />
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const { method, headers } = graphqlApi

  const [
    {
      data: {
        aboutmeSection: { data: aboutmeSection },
      },
    },
    {
      data: {
        topicV2S: { data: aboutMeTopiAndContent },
      },
    },

    {
      data: {
        categories: { data: projectCategories },
      },
    },
    {
      data: {
        projects: { data: projects },
      },
    },
  ]: [
    { data: { aboutmeSection: { data: Query['aboutmeSection'] } } },
    { data: { topicV2S: { data: Query['topicV2S'] } } },
    { data: { categories: { data: Query['categories'] } } },
    { data: { projects: { data: Query['projects'] } } }
  ] = await Promise.all([
    post(graphqlApi.endpoint, {
      method,
      headers,
      body: graphqlApi.aboutmeSectionQuery,
    }),
    post(graphqlApi.endpoint, {
      method,
      headers,
      body: graphqlApi.aboutMeTopiAndContent,
    }),
    post(graphqlApi.endpoint, {
      method,
      headers,
      body: graphqlApi.projectCategoriesQuery,
    }),
    post(graphqlApi.endpoint, {
      method,
      headers,
      body: graphqlApi.projectQuery,
    }),
  ])

  return {
    props: {
      aboutmeSection,
      aboutMeTopiAndContent,
      projectCategories,
      projects,
    },
  }
}
