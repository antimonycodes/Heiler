// import DocTopSection from "@/components/Doctor/DocTopSection";
import { useUser } from "../../contexts/UserContext";
import Search from "@/components/Doctor/Search";
import Alldoctors from "@/components/Doctor/AllSpecialties";

const Doctor = () => {
  const { userType } = useUser();

  return (
    <div>
      {/* <DocTopSection/> */}
      <Search />
      <Alldoctors />
    </div>
  );
};

export default Doctor;
