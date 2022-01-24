import React from 'react'
import Date from './Date'
import Headerstyles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={Headerstyles.Header}>
      <Link to="/">
        <h1>
          <Date />
        </h1>
      </Link>
    </div>
  )
}

export default Header
