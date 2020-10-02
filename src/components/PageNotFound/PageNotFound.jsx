import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => (
  <div className="pageNotFound">
    <h2 className="pageNotFound__heading">PAGE NOT FOUND</h2>

    <div className="pageNotFound__homeLink">
      <Link className="pageNotFound__link" to="/">
        HOME
      </Link>
    </div>
  </div>
)

export default PageNotFound
