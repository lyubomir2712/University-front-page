import NavBar from './Components/NavBar/NavBar.jsx'
import DegreeCard from './Components/DegreeCard/DegreeCard.jsx'
import UniversityAdditionalInfo from "./Components/UniversityAdditionalInfo/UniversityAdditionalInfo.jsx";
import EventsSection from "./Components/EventsSection/EventsSection.jsx"
import Carousel from "./Components/Carousel/Carousel.jsx";
import Footer from "./Components/Footer/Footer.jsx"

import News from "./Components/News/News.jsx"


function App() {


  return (
      <>

          <NavBar/>

          <br/><br/>

          <Carousel/>

          <br/><br/><br/>

          <DegreeCard/>

          <br/><br/><br/>

          <UniversityAdditionalInfo/>

          <br/><br/><br/><br/>

          <News/>
          <br/><br/><br/>

          <EventsSection/>
          <Footer/>
      </>
  )
}

export default App
