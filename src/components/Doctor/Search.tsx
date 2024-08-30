import searchIcon from "../../assets/search.svg"

const Search = () => {
  return (
    <div className=" mx-8 my-4">
      <div className=" flex flex-col md:flex-row md:justify-between">
      <h1>Back</h1>
      <div className=" shadow-md">
      <input type="text" className=" w-full bg-white py-2 outline-none border border-[#B5B5B51F]" />
      </div>
      </div>
    </div>
  )
}

export default Search