import React from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { logout } from '../Store/authSlice'

const Logout = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    

  return (
    <>
    
    </>
  )
}

export default Logout
