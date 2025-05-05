import { useState } from "react";
import validator from "validator";
import { useNavigate } from 'react-router-dom';
import { useMutation,useQueryClient } from "@tanstack/react-query";



export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({})
  const [data, SetData] = useState({
    email: "",
    password: ""
  })
  const passwordvisible = () => setShowPassword(!showPassword)


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
   
   const mutation = useMutation({
    mutationFn: async () => {
      console.time("Login API Request")
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data),
        credentials: "include"
      });
      console.timeEnd("Login API Request"); 
    
      const result = await response.json();
   
      console.log(result);

      
      if (!response.ok) throw new Error(result.message || "Login failed");
      return result.data.user; // ✅ Return user data
    },
    onSuccess: (user) => {
      // ✅ Store user in React Query cache
  
      queryClient.setQueryData(["user"], user);
   
      if(user.role=== "admin"){
        navigate("/admin/dashboard",{replace:true})
      }
      else{
        navigate("/user/dashboard",{replace:true})
      }

    },
    onError: (error) => {
      setErrors({ login: error.message });
    }
  });
  const handleSignin = async (e) => {
    e.preventDefault();
    if (validateFields()) {
      mutation.mutate(data)
    }
  }
  
  
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
    validateFields,
    isLoading: mutation.isPending,

  }

}