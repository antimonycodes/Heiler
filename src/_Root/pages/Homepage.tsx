// import HeroButtons from "@/components/Home/HeroButtons"
import TransactionHistory from "@/components/Home/TransactionHistory"
import HomeHero from "../../components/Home/HomeHero"
import TopSection from "../../components/Home/TopSection"
import HomeWallet from "@/components/Home/HomeWallet"



const Homepage = () => {
  return (
    <div>
        <TopSection/>
        <div className=" px-4 md:px-12 md:py-12 flex flex-col md:flex-row items-start gap-4">
          <div className="w-full basis-1/2">
        <HomeHero/>
        </div>
        <div className="w-full basis-1/2">
        <div className=" hidden md:block">
        <HomeWallet />
        </div>
        <TransactionHistory/>

        </div>
        </div>
    </div>
  )
}

export default Homepage 