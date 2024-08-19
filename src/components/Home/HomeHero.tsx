import heroImage from "/homehero.png"

const HomeHero = () => {
  return (
    <div className=' my-8 px-4 py-6 bg-[#EEFFF7] flex'>
        <div>
            <h1 className=' text-customGreen font-bold text-xl'>Early Protection <br />For Your Family Health </h1>
            <p className=' text-customGray '>Have a regular checkup to prevent <br /> any complications</p>
        </div>
        <div className="">
            <img src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default HomeHero