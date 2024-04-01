import Banner from "./Banner/Banner"
import FindUs from "./FindUs/FindUs"
import Form from "./Form/Form"
import Navbar from "./Navbar/Navbar"
import Services from "./Services/Services"
import SecondBanner from "./Successes/SecondBanner/SecondBanner"
import Successes from "./Successes/Successes"
import Testimonial from "./Testimonial/Testimonial"


function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <Successes/>
      <SecondBanner/>
      <Testimonial/>
      <Form/>
      <FindUs/>
    </>
  )
}

export default App
