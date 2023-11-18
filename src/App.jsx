import Home from './Home'
import NavBar from './NavBar'

function App() {
  return (
    <div className="main">
    <div className="content">
      <NavBar className="sticky" />
      <div className="min-h-fit">
        <Home/>
      </div>
    </div>
  </div>
  )
}

export default App