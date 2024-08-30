import React, { useEffect, useState } from 'react'

const Alldoctors = () => {
    const [response, setResponse] = useState([])

    const fetchDoctorSpecialties = async () =>{
        try {
            
        } catch (error) {
            console.log(error)
            
        }

    }
    useEffect(()=>{
        fetchDoctorSpecialties()
    },[])

  return (
    <div>

    </div>
  )
}

export default Alldoctors