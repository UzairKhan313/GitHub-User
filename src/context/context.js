import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext({})

export const GithubContextProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  //loading & requests
  const [requests, setRequests] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  //error
  const [error, setError] = useState({ show: false, msg: '' })

  const searchGithubUser = async (user) => {
    //toggle error
    toggleError()
    setIsLoading(true)
    // set loading
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((err) => {
        console.log(err)
      })
    if (response) {
      setGithubUser(response.data)
      const { login, followers_url } = response.data
      // // request for repos
      // axios
      //   .get(`${rootUrl}/users/${login}/repos?per_page=100`)
      //   .then((response) => {
      //     setRepos(response.data)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })

      // // request for followers for that user
      // axios
      //   .get(`${followers_url}?per_page=100`)
      //   .then((response) => {
      //     setFollowers(response.data)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })

      await Promise.allSettled([
        axios.get(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios.get(`${followers_url}?per_page=100`),
      ])
        .then((result) => {
          const [repos, followers] = result
          if (repos.status === 'fulfilled') {
            setRepos(repos.value.data)
          }
          if (followers.status === 'fulfilled') {
            setFollowers(followers.value.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      toggleError(true, 'There is no user with that user name.')
    }
    checkRequests()
    setIsLoading(false)
  }
  // limit for the request.
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data

        setRequests(remaining)
        if (remaining === 0) {
          toggleError(true, 'Sorry, you have exceeded your hourly rate limit!.')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const toggleError = (show = false, message = '') => {
    setError({ show: show, msg: message })
  }

  useEffect(checkRequests, [])
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        isLoading,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export const useGithubContext = () => {
  return React.useContext(GithubContext)
}
