import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_AUTHORS_INFO } from '../../graphql/queries'

function Authors() {
  const {loading , data ,errors}= useQuery(GET_AUTHORS_INFO)
  if(loading) return <h3>Loading ...</h3>
  if(errors) return <h3>Errors ...</h3>
  return (
    <div>
      Authors
    </div>
  )
}

export default Authors
