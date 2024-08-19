import HomeHero from "../components/Home/HomeHero"
import TopSection from "../components/Home/TopSection"


const Homepage = () => {
  return (
    <div>
        <TopSection/>
        <div className=" px-4">
        <HomeHero/>
        </div>
    </div>
  )
}

export default Homepage