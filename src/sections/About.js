import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-utilities.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Projects } from './Projects'
import { Context } from '../AboutStore'

import Tabs from '../components/Tabs'
import Tab from '../components/Tab'
import Section from '../components/Section'

export function About(props) {
  return (
    <Section id="about">
      <div className="row">
        <div className="col-md-6 text-center">
          <ProfileImage />
        </div>
        <div className="col-md-6 my-auto pt-3 pt-sm-0">
          <div className="text-left">
            <h1>About Me</h1>
            <p>
              Creative web developer with a flair for bringing innovative UX design to life. 2+ years of experience with
              various web technologies.
            </p>
            <AboutTabs />

            {/* <Projects /> */}
          </div>
        </div>
      </div>
    </Section>
  )
}

function AboutTabs(props) {
  const [state, dispatch] = useContext(Context)
  const [filterName, setFilterName] = useState('mainSkills')

  useEffect(() => {
    axios
      .get('./about.json')
      .then((response) => {
        const postsData = response.data
        dispatch({ type: 'SET_POSTS', payload: postsData })
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error })
      })
  }, [])

  let posts = <p>Loading...</p>

  if (state.error) {
    posts = (
      <p>
        Something went wrong: <span>{state.error}</span>
      </p>
    )
  }

  if (!state.error && state.posts) {
    posts = state.posts.map((post) => {
      return <Post key={post.id} post={post} />
    })
  }

  return (
    <React.Fragment>
      {state.error && (
        <p>
          Something went wrong: <span>{state.error}</span>
        </p>
      )}

      <Tabs>
        {state.allposts.map((button) => (
          <Tab
            key={button.id}
            button={button}
            filterName={filterName}
            dispatch={dispatch}
            setFilterName={setFilterName}
          />
        ))}
      </Tabs>

      {posts}
    </React.Fragment>
  )
}

function Post({ post }) {
  return (
    <div className="my-2 tabs-detail">
      <h6>{post.name}</h6>
      <p className="my-0 py-0 fw-light">{post.info}</p>
    </div>
  )
}

const ProfileImage = ({ children }) => <img src="./profile.png" alt="" className="img-fluid  rounded" />
