import React from 'react'
import styled, { css } from 'styled-components'

import Box from '../styles/Box'
import PartFirst from '../components/routes/home/PartFirst'
import PartLast from '../components/routes/home/PartLast'
import TheBestSolution from '../components/routes/home/TheBestSolution'

const Home = () => {
  return (
    <Box>
      <PartFirst />
      <TheBestSolution />
      <PartLast />
    </Box>
  )
}

export default Home
