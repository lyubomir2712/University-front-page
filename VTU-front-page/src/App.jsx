import NavBar from './Components/NavBar/NavBar.jsx'
import DegreeCard from './Components/DegreeCard/DegreeCard.jsx'
import UniversityAdditionalInfo from "./Components/UniversityAdditionalInfo/UniversityAdditionalInfo.jsx";
import News from "./Components/News/News.jsx"
import Carousel from "./Components/Carousel/Carousel.jsx";
import Footer from "./Components/Footer/Footer.jsx"

function App() {


  return (
      <>
          <NavBar/>

          <Carousel/>
          <DegreeCard/>

          <UniversityAdditionalInfo/>

          <News/>
          <Footer/>
      </>
  )
}

export default App
