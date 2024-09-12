import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Carousel from "./components/Carousel"
import Events from "./components/Events"
import Content from "./components/Content"
import Contact from "./components/Footer"
import Team from "./components/TeamDash"

const page = () => {
  return (
    <>
      <Navbar/>
      <Landing/>

      <Carousel/>
      <Content/>
      {/* <TeamDash/> */}
      <Contact/>
    </>
  )
}

export default page