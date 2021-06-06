import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Sameer from './profile.png'
import { Projects } from './Projects'
import { Context } from './AboutStore'
import axios from 'axios'

export function About(props) {
  return (
    <section id="about">
      <div className="d-flex w-100 h-100 ">
        <div className="p-5 mx-auto my-auto rounded wrapper">
          <div className="container my-auto py-4">
            <div className="row">
              <div className="col-md-6 text-center">
                <img src={Sameer} alt="" className="img-fluid  rounded" />
              </div>
              <div className="col-md-6 my-auto">
                <div className="text-left">
                  <h1>About Me</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quam qui illum, odit magni laborum
                    ipsa tenetur iste quo dolorem?
                  </p>
                  <AboutTabs />
                  {/* {AboutTabs()} */}
                  {/* <Projects /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutTabs(props) {
  const [state, dispatch] = useContext(Context)
  const [filterName, setFilterName] = useState('react')

  useEffect(() => {
    axios
      .get('./posts.json')
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
      return <Post key={post.id} title={post.title} />
    })
  }

  return (
    <React.Fragment>
      {/* {state.error && (
        <p>
          Something went wrong: <span>{state.error}</span>
        </p>
      )}

      {!state.error &&
        state.posts &&
        state.posts.map((post) => {
          //   return <Post key={post.id} title={post.title} />
          return <h1 key={post.id}>{post.title}</h1>
        })} */}
      <button
        className="btn btn-dark active"
        onClick={() => {
          dispatch({ type: 'react', payload: 'react' })
        }}>
        react
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch({ type: 'database', payload: 'database' })
        }}>
        database
      </button>
      {/* {posts} */}
    </React.Fragment>
  )
  //   return (
  //     <ul className="nav nav-pills">
  //       <li className="nav-item">
  //         <a className="nav-link active" href="#">
  //           Active
  //         </a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="#">
  //           Link
  //         </a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="#">
  //           Link
  //         </a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link disabled" href="#">
  //           Disabled
  //         </a>
  //       </li>
  //     </ul>
  //   )
}

function Post({ title }) {
  return <h1>{title}</h1>
}
