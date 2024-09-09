import axios from 'axios';
import { useEffect, useState } from 'react';
// import { ClipLoader } from 'react-spinners';
import doctorcard from "../../assets/doctorcard.png";
import { Link } from 'react-router-dom';
import CircularLoader from '../Shared/CircularLoader';

const AllSpecialties = () => {
  const [response, setResponse] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDoctorSpecialties = async () => {
    try {
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
      const endpoint = '/general/getSpecialties';
      const url = `${baseURL}${endpoint}`;
      const apiKey = import.meta.env.VITE_APP_API_KEY;

      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        }
      });
      setResponse(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorSpecialties();
  }, []);

  return (
    <div>
      {loading ? (
      <CircularLoader/>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-8 h-full'>
          {response.data.map((item) => (
            <Link to={`/all-doctors/${item.id}`} key={item.id}>
              <div className='flex flex-col items-center'>
                <img src={doctorcard} alt="Doctor Specialty" />
                <h1 className='text-xl font-semi-bold'>{item.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSpecialties;