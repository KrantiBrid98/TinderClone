import React from "react";
import Nav from '../component/Nav'


const Home = () => {

   const authToken = true;

   const onHandleClick = () => {

   }

   return <div>
      <Nav
      authToken={authToken}
      />
      <h2>Swipe right</h2>
      <button className='primary-button'
      onClick={onHandleClick}
      >
         {authToken ? 'Sign out' : "Create account"}
         </button>
   </div>
}

export default Home