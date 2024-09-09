import { ClipLoader } from 'react-spinners';

const CircularLoader = () => {
  return (
    <div>
         <div className="flex justify-center items-center w-full h-full mx-auto">
          <ClipLoader color="#3498db" size={60} />
        </div>
    </div>
  )
}

export default CircularLoader