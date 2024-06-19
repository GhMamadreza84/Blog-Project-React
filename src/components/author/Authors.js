import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_AUTHORS_INFO } from '../../graphql/queries'

function Authors() {
  const {loading , data ,errors}= useQuery(GET_AUTHORS_INFO)
  return (
    <div>
      Authors
    </div>
  )
}

export default Authors
