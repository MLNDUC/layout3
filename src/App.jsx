
import './App.css'
import { Aside } from './components/aside/Aside'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Navigation } from './components/navigation/Navigation'
import { Section } from './components/section/Section'

function App() {


  return (
    <>
      <div className="app">
        <Header />
        <Navigation />
        <Aside />
        <div className="main">
          <Content />
          <Section />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
