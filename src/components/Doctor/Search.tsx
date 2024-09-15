// import searchIcon from "../../assets/search.svg";
import backArrow from "../../assets/";
const Search = () => {
  return (
    <div className=" mx-8 my-4">
      <div className=" flex flex-col md:flex-row  gap-4 md:justify-between">
        <div>
          <h1>Back</h1>
        </div>
        <div className=" shadow">
          <input
            type="text"
            className=" w-full bg-white py-2 px-8 outline-none border border-[#B5B5B51F]"
            placeholder="Search anything ..."
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
