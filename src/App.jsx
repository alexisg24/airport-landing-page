import { NavBar, Home, Support, Search, Info, Lounge, Travelers, Subscribers, Footer } from './components'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      {/* <Search /> */}
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      {/* <Subscribers /> */}
      <Footer />
    </>
  )
}

export { App }
