import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Home />
      <Footer isSplashPage={false}/>
    </>
  )
}

export default App
