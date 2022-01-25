import React from 'react'
import { ListItem } from './routes/ListItem'
import Layoutstyles from './Layout.module.css'
import { Link } from 'react-router-dom'
import Header from './components/Header.js'

const Layout = () => {
  return (
    <div className={Layoutstyles.container}>
      <Header />
      <ListItem />
      <Link to="/">
        <button className={Layoutstyles.button}>Return</button>
      </Link>
    </div>
  )
}

export default Layout
