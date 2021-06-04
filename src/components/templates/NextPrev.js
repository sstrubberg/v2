import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const NextPrev = props => {
  //   console.log(props)
  const { next, prev, currentPage } = props
  console.log(next)
  console.log(prev)
  console.log(currentPage)

  //   console.log(next)
  //   console.log(currentPage)

  return (
    <>
      <div>
        {prev && (
          <div>
            <Link to={`/portfolio/${prev.slug}`}>Previous</Link>
          </div>
        )}
        {next && (
          <div>
            <Link to={`/portfolio/${next.slug}`}>Next</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default NextPrev
