import { useState } from "react";
import validator from "validator";
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordvisible = () => {
    setShowPassword(!showPassword)
  }
  const [errors, setErrors] = useState({})
  const [data, SetData] = useState({
    email: "",
    password: ""
  })


  const validateFields = () => {
    let errors = {}
    if (!data.email) {
      errors.email = "Email is required"
      setErrors(errors)
      return false
    }
    if (data.email && !validator.isEmail(data.email)) {
      errors.email = "please provide a valid email address"
      setErrors(errors)
      return false
    }
    if (!data.password) {
      errors.password = "Password is required"
      setErrors(errors)
      return false

    }
    setErrors({})
    return true


  }
  const handleSignin = async (e) => {
    e.preventDefault();
    if (!validateFields()) {
      return

    }
    try {
      const response = await fetch("/api/v1/users/login", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)

      })
      console.log(response);
      const result = await response.json()
      console.log(result);
      if (!response.ok) {
        setErrors({ login: result.message || 'Login failed' });
      }
      if (response.ok) {     
        const isAdmin = result.data.user.role === "admin";  
        
        console.log(isAdmin)
        
        if (isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/user/dashboard');
        }
       
          
      }
    } catch (error) {
      console.log(error);

    }

  };
  
  
  const handleonChange = (e) => {
    const { name, value } = e.target
    SetData((prev) => ({ ...prev, [name]: value }))


  }
  return {
    data,
    errors,
    handleSignin,
    handleonChange,
    passwordvisible,
    showPassword,
    validateFields

  }

}