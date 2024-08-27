import HeroButtons from "./HeroButtons"
import heroImage from "/homehero.png"

const HomeHero = () => {
  return (
    <div className="">
    <div className=' my-8 md:my-0  px-4 py-6 bg-[#EEFFF7] flex  justify-between relative'>
        <div className=" basis-1/2">
            <h1 className=' text-customGreen font-bold text-xl'>Early Protection <br />For Your Family Health </h1>
            <p className=' text-customGray '>Have a regular checkup to prevent <br /> any complications</p>
        </div>
        <div className="   ">
            <img src={heroImage} alt="" className="w-full"/>
        </div>
    </div>
    <HeroButtons/>
    </div>
  )
}

export default HomeHero