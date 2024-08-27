import { useUser } from "@/contexts/UserContext";

const HeroButtons = ()=> {
  const { userType } = useUser();

    return(
        <>
        <div className=" flex md:flex-col gap-3 w-full">
            <button className=" bg-customGreen w-full border rounded-md px-4 py-2 text-white">{userType}</button>
            <button className=" bg-white border w-full rounded-md px-4 py-2 text-customGreen">Ambulance</button>
        </div>
        </>

    )
}

export default HeroButtons