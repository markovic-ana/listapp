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
      <footer>List &copy;, 2022 </footer>
    </div>
  )
}

export default App
