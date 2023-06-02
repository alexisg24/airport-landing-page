import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import { Info } from './components/Info/Info'
import { Lounge } from './components/Lounge/Lounge'
import { NavBar } from './components/Navbar/Navbar'
import { Search } from './components/Search/Search'
import { Subscribers } from './components/Subscribers/Subscribers'
import { Support } from './components/Support/Support'
import { Travelers } from './components/Travelers/Travelers'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      {/* <Subscribers />
      <Footer /> */}
    </>
  )
}

export { App }
