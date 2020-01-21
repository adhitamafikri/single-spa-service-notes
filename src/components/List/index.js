import React from 'react'
import { Link } from 'react-router-dom'

function List() {
  return (
    <div>
      <h1>The List of Notes</h1>
      <Link to="/create">
        <button>Create Notes</button>
      </Link>
    </div>
  )
}

export default List
