import React from 'react'
import styled from 'styled-components'
import { useGithubContext } from '../context/context'
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'

const Repos = () => {
  const { repos } = useGithubContext()

  // reduce take two parameter one is the callback and second is what we want to return.
  const languages = repos.reduce((total, item) => {
    // "tatal" is the object that we are going to return.
    const { language, stargazers_count } = item
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})

  // let sort the languages but first turn it into Array
  // Object.values return a array of all the values in the Array.
  // sort method is using for sorting which take two parameter the current item and the next item of the iteration.
  const mostUsed = Object.values(languages)
    .sort((currentItem, nextItem) => {
      return nextItem.value - currentItem.value
    })
    .slice(0, 5) // to take the first 5 elements of the array

  // most start per language
  const mostPopular = Object.values(languages)
    .sort((currentItem, nextItem) => {
      return nextItem.stars - currentItem.stars
    })
    .map((item) => {
      return { ...item, value: item.stars }
    })
    .slice(0, 5)

  // Stars and Forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item
      total.stars[stargazers_count] = { label: name, value: stargazers_count }
      total.forks[forks] = { label: name, value: forks }
      return total
    },
    {
      stars: {},
      forks: {},
    }
  )
  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
