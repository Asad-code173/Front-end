import {useState} from "react";
import validator from "validator";
import { toast } from "react-toast";
import { useNavigate } from "react-router-dom";


export const useSignup = ()=>{
    const[showpassword, setShowpassword] = useState(false);
    const navigate = useNavigate()
    const passwordVisisble = () => {
        setShowpassword(!showpassword)
    }
    
    
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })
    
    const [errors, SetErrors] = useState({})
    const validateFields = () => {
        let errors = {}

        if (!data.username) {           
            errors.username = "Username is required"
            SetErrors(errors)
            return false
    
        }
        if (!data.email) {
            errors.email = "Email is Required"
            SetErrors(errors)
            return false
        }
        if (data.email && !validator.isEmail(data.email)) {
            errors.email = "Please Enter a valid Email address"
            SetErrors(errors)
            return false
        }
        if(!data.password){
          
            errors.password = "Password is required"
            SetErrors(errors)
            return false
        }
         else if(data.password.length <8){
            errors.password = "Password must be 8 characters long"
            SetErrors(errors)
            return false
        }
        else {
            const hasLetter = /[a-zA-Z]/.test(data.password);
            const hasNumber = /[0-9]/.test(data.password);
            const hasSpecialChar = /[^a-zA-Z0-9]/.test(data.password);
      
            if (!hasLetter) {
              errors.password = "Password must contain at least 1 letter";
              SetErrors(errors)
              return false
            }
            if (!hasNumber) {
              errors.password = "Password must contain at least 1 number";
              SetErrors(errors)
              return false
            }
            if (!hasSpecialChar) {
              errors.password = "Password must contain at least 1 special character";
              SetErrors(errors)
              return false
            }
          }
        
        
    
        SetErrors({})
        return true
    }
    const handleSignup = async (e) => {
        e.preventDefault();
        if (!validateFields()) {
            return
    
        }
    
    
    
    
    
        try {
            const response = await fetch("/api/v1/users/register", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
    
                body: JSON.stringify(data)
            })
            console.log(response);
    
            const result = await response.json();
            if (response.ok) {
                setData({
                    username: "",
                    email: "",
                    password: ""
                })
                toast.success("Registered Successfully");
                navigate('/login')
    
            }
            else {
                toast.error(result.message || "Failed to register");
            }
        } catch (error) {
            console.log(error);
    
        }
    }
    const handleonChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }))
    }
    
    return {
        data,
        errors,
        handleSignup,
        handleonChange,
        validateFields,
        passwordVisisble,
        showpassword
    }

} 
