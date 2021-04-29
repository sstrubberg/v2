import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import hands from './Hands'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-column-gap: 0.75rem;
  min-height: calc(90vh);
  align-items: center;
  justify-items: center;
  /* margin: -60px 0 0 0; */
  /* margin: 0 auto; */
  padding: 2.5rem 1.5rem;

  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

const Container = styled.div`
  grid-column: 1 / -1;
`

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.body};
  font-size: 2rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: 1.15;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    font-size: 4em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    font-size: 5em;
  }
`

const Hand = styled(motion.span)`
  display: inline-block;
`

const Intro = () => {
  const [hand, setHand] = useState('👋')

  const newHand = () => {
    setHand(
      hands.allTheHands[Math.floor(Math.random() * hands.allTheHands.length)]
    )
  }

  const WavingHand = () => (
    <Hand
      title="Click me!"
      onClick={() => newHand()}
      animate={{ rotate: 5 }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        from: 0,
        duration: 1,
        ease: 'easeInOut',
        type: 'tween',
      }}
    >
      {hand}
    </Hand>
  )

  return (
    <Wrapper>
      <Container>
        <H1>
          <WavingHand />
          &nbsp;Howdy, I’m Scott.
        </H1>
      </Container>
    </Wrapper>
  )
}

export default Intro
