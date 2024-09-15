// Alldoctors.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CircularLoader from "../Shared/CircularLoader";
import doctordp from "../../assets/doctordp.png";
import stars from "../../assets/stars.png";

const Alldoctors = () => {
  const { id } = useParams<{ id: string }>();
  const [response, setResponse] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchDoctor = async () => {
    try {
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
      const endpoint = "/doctors/list.bySpecialty";
      const url = `${baseURL}${endpoint}`;
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const token = localStorage.getItem("token");

      if (!token)
        throw new Error("User token is missing. Please log in again.");

      const specialtyId = Number(id);
      const response = await axios.post(
        url,
        { id: specialtyId, usertoken: token },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.data.success) {
        setResponse(response.data.data);
      } else {
        setError(response.data.message);
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
  }, [id]);

  const handleSendMessage = (doctor: any) => {
    // Get any existing doctors from localStorage
    const storedDoctors = localStorage.getItem("chatDoctors");
    let doctorsArray = storedDoctors ? JSON.parse(storedDoctors) : [];

    // Check if the doctor with the same token already exists
    const existingDoctor = doctorsArray.find(
      (existingDoctor: any) => existingDoctor.token === doctor.token
    );

    if (!existingDoctor) {
      // Doctor not found, add the new doctor to the array
      doctorsArray.push({
        firstName: doctor.firstName,
        lastName: doctor.lastName,
        specialty: doctor.specialty,
        id: doctor.id,
        token: doctor.token,
      });

      // Save the updated array back to localStorage
      localStorage.setItem("chatDoctors", JSON.stringify(doctorsArray));
    }

    // Navigate to the chat page
    navigate("/chat", { state: { doctor } });
  };

  return (
    <div className="relative">
      {loading ? (
        <CircularLoader />
      ) : (
        <div>
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
              {response.map((doctor, index) => (
                <div
                  key={index}
                  className="border px-4 py-4 flex flex-col gap-4"
                >
                  <div className="flex justify-between">
                    <img src={doctordp} alt="Doctor Profile" />
                    <div>
                      <h1 className="text-lg font-semibold">{`Dr. ${doctor.lastName} ${doctor.firstName}`}</h1>
                      <p>MBBS, MD, FMCS(Dentistry)</p>
                      <img src={stars} alt="Rating" />
                    </div>
                    <p className="text-customGreen font-semi-bold">
                      Specialist
                    </p>
                  </div>
                  <button
                    className="bg-customGreen w-full px-2 py-2 text-white rounded"
                    onClick={() => handleSendMessage(doctor)}
                  >
                    Send a message
                  </button>
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
