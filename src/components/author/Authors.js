import { useQuery } from '@apollo/client'
import React from 'react'

function Authors() {
  const {loading , data ,errors}= useQuery(GET_)
  return (
    <div>
      Authors
    </div>
  )
}

export default Authors
