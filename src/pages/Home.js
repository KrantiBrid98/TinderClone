import React, { useState } from "react";
import Button from "../component/Common/Button";
import SignUp from "../component/Modals/Signup";
import Nav from '../component/Nav'
import './CSS/home.css'

const Home = () => {

   const authToken = false;
   const [showSignupMpdal, setShowSignup] = useState(false);

   const onHandleClick = () => {
      setShowSignup(true);
   }

   return <div className="home-container">
      <Nav
         authToken={authToken}
      />
      <h2>Swipe right</h2>
      {!showSignupMpdal && <Button
         label={authToken ? 'Sign out' :   "Create account"}
         onClick={onHandleClick}
      />}
      {
         showSignupMpdal && <SignUp />
      }
   </div>
}

export default Home