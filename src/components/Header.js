import React from 'react'
import Date from './Date'
import Headerstyles from './Header.module.css'

function Header() {
  return (
    <div className={Headerstyles.Header}>
      <h1>
        <Date />
      </h1>
    </div>
  )
}

export default Header
