
import './App.css'
import { Nav } from './components/nav/Nav'
import { UpperLeft } from './components/upperLeft/UpperLeft'
import { UpperCenter } from './components/upperCenter/UpperCenter'
import { UpperRight } from './components/upperRight/UpperRight'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Middle } from './components/middle/Middle'
import { Lower } from './components/lower/Lower'

function App() {


  return (
    <>
      <div className="app">
        <Header />
        <Nav />
        <div className="main">
          <div className="upper">
            <UpperLeft />
            <UpperCenter />
            <UpperRight />
          </div>
          <Middle />
          <Lower />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
