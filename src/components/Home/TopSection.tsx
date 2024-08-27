import bell from "../../assets/bell.svg"
import profilePicture from "../../assets/profilepic.png"
import downArrow from "../../assets/downArrow.svg"

const TopSection = () => {
    const d = new Date();
    
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
 
    const dayName = daysOfWeek[d.getDay()];
    const dayOfMonth = d.getDate();
    const monthName = monthsOfYear[d.getMonth()];

    const name = "Oluwadara"

    return (
        <div className="py-4 px-4 md:px-12 shadow ">
            <p className='text-customGray'>{`${dayName}, ${dayOfMonth} ${monthName}`}</p>
            <div className=" flex items-center justify-between">
            <h1 className=' text-xl font-bold'>Hi, {name}</h1>
            <div className=" flex items-center gap-4">
                <img src={bell} alt="" />
                <img src={profilePicture} alt="" />
                <img src={downArrow} alt="" />
            </div>
            </div>
        </div>
    );
};

export default TopSection;
