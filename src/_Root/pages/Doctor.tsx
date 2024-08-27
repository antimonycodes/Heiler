import DocTopSection from "@/components/Doctor/DocTopSection";
import { useUser } from "../../contexts/UserContext";
import Search from "@/components/Doctor/Search";


const Doctor = () => {
  const { userType } = useUser();

  return (
    <div>
      <DocTopSection/>
      <Search/>
    </div>
  )
}

export default Doctor