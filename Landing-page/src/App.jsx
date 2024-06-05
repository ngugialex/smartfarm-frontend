import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Client from './components/Client'
import Marketing from './components/Marketing'
import "/home/davie/smartfarm/smartfarm/src/Styles.css"
function App() {

  return (
    <>
      <div className='bg-dark-900 font-bold'>
      < Navbar />
      < Home />
      < Client />
      < Marketing />
      < Testimonials />
      < Contact />
      < Faq />
      < Footer />
      </div>
    </>
  )
}

export default App
