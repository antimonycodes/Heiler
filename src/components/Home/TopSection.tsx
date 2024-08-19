import React from 'react';

const TopSection = () => {
    const d = new Date();
    
    // Arrays to get the day name and month name
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Get current day name, date, and month name
    const dayName = daysOfWeek[d.getDay()];
    const dayOfMonth = d.getDate();
    const monthName = monthsOfYear[d.getMonth()];

    const name = "Oluwadara"

    return (
        <div className="py-4 px-4 shadow-md ">
            <p className='text-customGray'>{`${dayName}, ${dayOfMonth} ${monthName}`}</p>
            <h1 className=' text-xl font-bold'>Hi, {name}</h1>
        </div>
    );
};

export default TopSection;
