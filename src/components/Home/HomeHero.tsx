import HeroButtons from "./HeroButtons";
import heroImage from "/homehero.png";

const HomeHero = () => {
  return (
    <div className=" flex  flex-col gap-8">
      <div className=" my-8 md:my-0  px-8 py-8 bg-[#EEFFF7] flex  justify-between items-center  relative">
        <div className=" basis-1/2">
          <h1 className=" text-customGreen font-bold text-xl">
            Early Protection <br />
            For Your Family Health{" "}
          </h1>
          <p className=" text-customGray ">
            Have a regular checkup to prevent <br /> any complications
          </p>
        </div>
        <div className="   ">
          <img src={heroImage} alt="" className="w-full items-baseline" />
        </div>
      </div>
      <HeroButtons />
    </div>
  );
};

export default HomeHero;
