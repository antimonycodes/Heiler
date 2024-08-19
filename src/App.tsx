import { Route, Routes } from "react-router-dom"
import Authlayout from "./components/_Auth/Authlayout"
import SignUp from "./components/_Auth/SignUp"
import Begin from "./components/Begin"
import MainPage from "./pages/MainPage"
import SignIn from "./components/_Auth/SignIn"
import ForgotPassword from "./components/_Auth/ForgotPassword"
import Homepage from "./pages/Homepage"
import Doctor from "./pages/Doctor"
import Chat from "./pages/Chat"
import Wallet from "./pages/Wallet"


function App() {
 

  return (
  
      <Routes>
        <Route path="/" element={<Begin />} />
        <Route element={<Authlayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        </Route>
        {/*  */}
        <Route element={<MainPage/>}>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/wallet" element={<Wallet/>}/>

        </Route>
      </Routes>
  

  )
}

export default App
