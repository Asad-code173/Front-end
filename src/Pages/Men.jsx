import React from 'react'
import Man from '../Components/Mens/Man'
import SideMenu from '../Components/Mens/SideMenu'
import Card from "../Components/Card"
import Men1 from "../assets/Mens/Men1.webp"
import Men2 from "../assets/Mens/Men2.webp"
import Men3 from "../assets/Mens/Men3.webp"


const Men = () => {
  const product = [
    {id:1,
    image: Men1,
    title: "Green Blended Kurta",
     price: "PKR 5000",
     sizes:['Xl','Lg','M'],
     quantity:1,
     stock:3 },
    {id:2, image: Men2, title: "Gray Kurta", price: "PKR 6770",sizes:['Xl','Lg']  },
    {id:3, image: Men3, title: "Electric Blue Blended Kurta", price: "PKR 4610",sizes:['Xl','Lg','M']  },
  ]
  
  return (
    <>
    <Man/>
    <div className="md:flex">
    <SideMenu/>
    <Card products = {product}/>
     </div>
    </>
  )
}

export default Men