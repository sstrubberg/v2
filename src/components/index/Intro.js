import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import hands from './Hands'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-row-gap: 0.5rem;
  padding: 2.5rem 1.5rem;
  height: 75vh;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    grid-template-rows: repeat(8, 1fr);
    grid-row-gap: 0.5rem;
    padding: 2.5rem 3rem;
  }
`

const H1 = styled.h1`
  grid-row: 3;
  /* grid-column: 2 / span 6; */
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.75rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    font-size: 3em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    font-size: 4em;
  }
`

const Description = styled.p`
  grid-row: 4;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.2rem;
  padding-top: 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    width: 75%;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    width: 75%;
  }
  @media screen and (min-width: ${props => props.theme.responsive.xl}) {
    width: 60%;
  }
  @media screen and (min-width: ${props => props.theme.responsive.xl}) {
    width: 50%;
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
      <H1>
        Howdy, I’m Scott. <WavingHand />
      </H1>
      <Description>
        A front-end developer, father, teacher, design thinker, husband, and
        technologist. I’m passionate about creating environments for users and
        learners to feel empowered when using technology to succeed in their
        outcomes.
      </Description>
    </Wrapper>
  )
}

export default Intro
