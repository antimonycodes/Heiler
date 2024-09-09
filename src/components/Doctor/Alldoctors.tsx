import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularLoader from "../Shared/CircularLoader";
import doctordp from "../../assets/doctordp.png"
import stars from "../../assets/stars.png"

const Alldoctors = () => {
  const { id } = useParams<{ id: string }>(); // Get the specialty id from URL
  const [response, setResponse] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctor = async () => {
    try {
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
      const endpoint = '/doctors/list.bySpecialty';
      const url = `${baseURL}${endpoint}`;
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      
      // Retrieve user token from localStorage
      const token = localStorage.getItem("token");
      
      // Ensure the token exists
      if (!token) {
        throw new Error("User token is missing. Please log in again.");
      }
      const specialtyId = Number(id);
      // Make the POST request with body data
      const response = await axios.post(url, 
        {
          id: specialtyId,    // Pass specialty id in the body
          usertoken: token,   // Pass user token in the body
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,  // Pass API key here
          }
        }
      );
      console.log('Request body:', {
        id: id,
        usertoken: token
      });
      

      if (response.data.success) {
        setResponse(response.data.data); // Set the response data
      } else {
        setError(response.data.message); // Handle API errors
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, [id]); // Re-fetch doctors when the id changes

  return (
    <div>
      {loading ? (
        <CircularLoader />
      ) : (
        <div>
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : (
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-4 px-4">
              {/* Render the list of doctors */}
              {response.map((doctor, index) => (
                <div key={index} className=" border px-4 py-4 flex flex-col gap-4">
                  <div className=" flex justify-between">
                    {/* profile picture */}
                    <div className=" ">
                      <img src={doctordp} alt="" />
                      </div>
                      {/* info */}
                      <div>
                        <div className=" flex justify-between">
                        <h1 className=" text-lg font-semibold">{`Dr. ${doctor.lastName} ${doctor.firstName}`}</h1>
                        </div>
                        <p>MBBS, MD, FMCS(Dentistry)</p>
                        <img src={stars} alt="" />
                      </div>
                      {/* specialist */}
                      <p className=" text-customGreen font-semi-bold">Specialist</p>

                  </div>
                  {/*  */}
                  {/*  */}
                  <button className=" bg-customGreen w-full px-2 py-2 text-white rounded">See Profile</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Alldoctors;
