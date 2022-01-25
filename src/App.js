import './App.css'
// import ListForm from './components/ListForm.js'
import List from './components/List'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <List />
      </div>
      <footer>List, 2022 &copy;</footer>
    </div>
  )
}

export default App
