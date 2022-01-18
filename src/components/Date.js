import React from 'react'
import Datestyles from './Date.module.css'

//nalazi se u Header
const Date = () => {
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }
  let today = new window.Date()
  let date = today.toLocaleDateString('en-US', options)
  return <div className={Datestyles.date}>{`${date}`}</div>
}

export default Date
