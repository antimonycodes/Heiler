import { Route, Routes } from "react-router-dom"
import Authlayout from "./_Auth/Authlayout"
import SignUp from "./_Auth/SignUp"
import Begin from "./components/Begin"
import SignIn from "./_Auth/SignIn"
import ForgotPassword from "./_Auth/ForgotPassword"
import Homepage from "./_Root/pages/Homepage"
import Doctor from "./_Root/pages/Doctor"
import Chat from "./_Root/pages/Chat"
import Wallet from "./_Root/pages/Wallet"
import VerifyEmail from "./_Auth/VerifyEmail"
import RootLayout from "./_Root/pages/RootLayout"
import Successful from "./_Auth/Successful"
import Alldoctors from "./components/Doctor/AllDoctors"
import Settings from "./_Root/pages/Settings"
import Notifications from "./_Root/pages/Notifications"
import Cards from "./_Root/pages/Cards"


function App() {
 

  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/begin" element={<Begin />} />
        <Route element={<Authlayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/verifyEmail" element={<VerifyEmail/>} />
          <Route path="/successful" element={<Successful/>}/>
        </Route>

        {/* PRIVATE ROUTES  */}
        <Route element={<RootLayout/>}>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
       <Route path="/settings" element={<Settings/>}/>
       <Route path="/notifications" element={<Notifications/>} />
       <Route path="cards" element={<Cards/>}/>
       <Route path="/all-doctors/:id" element={<Alldoctors/>}/>
        </Route>
      </Routes>
      
     </>
  

  )
}

export default App
