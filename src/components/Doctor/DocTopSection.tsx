// import bell from "../../assets/bell.svg"
import profilePicture from "../../assets/profilepic.png"
import downArrow from "../../assets/downArrow.svg"

const DocTopSection = () => {
  return (
    <div className="py-4 px-4 md:px-12 shadow ">
            {/* <p className='text-customGray'>{`${dayName}, ${dayOfMonth} ${monthName}`}</p> */}
            <div className=" flex items-end justify-between">
            <h1 className=' text-xl font-bold'>Find your doctors</h1>
            <div className=" flex items-center gap-4">
                {/* <img src={bell} alt="" /> */}
                <img src={profilePicture} alt="" />
                <img src={downArrow} alt="" />
            </div>
            </div>
        </div>
  )
}

export default DocTopSection