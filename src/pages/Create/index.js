import React from 'react'
import { Link } from 'react-router-dom'

function Create() {
  return (
    <div>
      <h1>The Create Notes page</h1>
      <Link to="/">
        <button>Back to Index</button>
      </Link>
    </div>
  )
}

export default Create
