import React, { useState } from 'react';
import { Button, Input } from '../Components/index';


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const ForgotPassword = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
   
  };

  return (
    <>
  
      <div className='px-6 md:flex items-center justify-center w-full mt-28 mb-28 '>
        <div className={`md:mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black`}>
          <form className=''>
            <div className='space-y-5'>
              <Input
                value={email}
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />    

              <Button
                onClick={ForgotPassword}
                type="submit"
                className="w-full"
              >Submit</Button>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
