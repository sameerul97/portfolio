import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../store/about'
import { Info as IInfo } from '../store/about/state'

import Tabs from '../components/Tabs'
import Tab from '../components/Tab'
import Section from '../components/Section'
import { Badge } from '../components/Badge'
import { ActionType } from '../store/about/action-types'

export function About() {
  return (
    <Section id="about">
      <div className="row">
        <div className="col-lg-6 text-center">
          <ProfileImage />
        </div>
        <div className="col-lg-6 pt-3 pt-lg-0">
          <div className="text-left">
            <h1>About Me</h1>
            <p>
              Creative web developer with a flair for bringing innovative UX design to life. 2+ years of experience with
              various web technologies.
            </p>
            <AboutTabs />
          </div>
        </div>
      </div>
    </Section>
  )
}

function AboutTabs() {
  const { state, dispatch } = useContext(Context)
  const [filterName, setFilterName] = useState('mainSkills')

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch('./about.json')
        const data = await response.json()

        dispatch({ type: ActionType.SET_ABOUT, payload: data })
      } catch (error) {
        dispatch({ type: ActionType.SET_ERROR, payload: 'Unable to load about' })
      }
    }

    FetchData()
  }, [dispatch])

  let infos: React.ReactNode = <p>Loading...</p>

  if (state.error) {
    infos = (
      <p>
        <strong>Error {state.error}</strong>
      </p>
    )
  }

  if (!state.error && state.selectedInfo.length > 0) {
    infos = state.selectedInfo.map((post: IInfo) => {
      return <Info key={post.id} post={post} />
    })
  }

  return (
    <React.Fragment>
      <Tabs>
        {state.aboutButtonFilters.map((button) => (
          <Tab
            key={button.id}
            button={button}
            filterName={filterName}
            dispatch={dispatch}
            setFilterName={setFilterName}
          />
        ))}
      </Tabs>

      {infos}
    </React.Fragment>
  )
}

function Info({ post }: { post: IInfo }) {
  return (
    <div className="my-2 mb-3 tabs-detail">
      <h6 className="mb-1">{post.name}</h6>
      {post.info && <p className="my-0 py-0 fw-light">{post.info}</p>}

      {post.tags?.map((tag, i) => (
        <Badge key={i} tag={tag} classes={'bg-white text-dark font-weight-normal text-uppercase hoverable-badge'} />
      ))}
    </div>
  )
}

const ProfileImage = () => <img src="./profile.png" alt="sameer_image" className="img-fluid  rounded" />

export { AboutTabs }
