import React from 'react'
import Woman from '../Components/Woman/Woman'
import SideMenu from "../Components/Woman/SideMenu"
import Card from '../Components/Card'
import women1 from "../assets/Women/women1.jpg"
import women2 from "../assets/Women/Women2.jpg"
import women3 from "../assets/Women/women3.jpg"

const Women = () => {
  const product = [

    {id:1, image: women1, title: "Lawn Embriodery Kurta", price: "PKR 5000" },
    {id:2, image: women2, title: "Gray Kurta", price: "PKR 6770" },
    {id:3, image: women3, title: "Electric Blue Blended Kurta", price: "PKR 4610" },
   
  ];
  return (
    <>

    <Woman/>
    <div className='md:flex'>
    <SideMenu/>
    <Card products={product}/>
    </div>
    
    
    </>
  )
}

export default Women