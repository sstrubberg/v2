import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import hands from './Hands'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  /* min-height: calc(90vh); */
  /* align-items: center; */
  /* justify-items: center; */
  /* padding: 2.5rem 1.5rem; */

  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    grid-template-rows: repeat(6, 1fr);

    padding-top: 0;
    padding-bottom: 0;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

const H1 = styled.h1`
  grid-row: 2;
  grid-column: 2 / span 6;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.75rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  align-self: center;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    font-size: 4em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    font-size: 5em;
  }
`

const Description = styled.p`
  grid-row: 3;
  grid-column: 2 / span 6;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.2rem;
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
        A front-end developer, father, teacher, design thinker, husband,
        technologist, and human.
      </Description>
    </Wrapper>
  )
}

export default Intro
