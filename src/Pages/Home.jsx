import React from 'react'
import SliderComponent from '../Components/Slider/SliderComponent'
import SideMenu from "../Components/SideMenu"
import Card from "../Components/Card"
import Men1 from "../assets/Mens/Men1.webp"
import Men2 from "../assets/Mens/Men2.webp"
import Men3 from "../assets/Mens/Men3.webp"
import women1 from "../assets/Women/women1.jpg"
import women2 from "../assets/Women/Women2.jpg"
import women3 from "../assets/Women/women3.jpg"





const Home = () => {
    const products = [
        {
            id: 1,
            image: Men1,
            title: "Green Blended Kurta",
            price: "PKR 5000",
            sizes: ['Xl', 'Lg', 'M'],
            quantity: 1,
            stock: 4
        },
        {
            id: 2,
            image: Men2,
            title: "Gray Kurta",
            price: "PKR 6770",
            sizes: ['Xl', 'Lg', 'M', 'S'],
            qunatity: 3,
            stock: 5,
        },
        {
            id: 3,
            image: Men3,
            title: "Electric Blue Blended Kurta",
            price: "PKR 4610",
            sizes: ['Xl', 'Lg', 'M'],
            quantity: 2,
            stock: 4
        },
        {
            id: 4,
            image: women1,
            title: "Lawn Embriodery Kurta",
            price: "PKR 5000",
            sizes: ['Xl', 'Lg', 'M', 'S'],
            quantity: 2,
            stock: 3
        },
        {
            id: 5,
            image: women2,
            title: "Gray Kurta",
            price: "PKR 6770",
            sizes: ['Xl', 'Lg', 'M', 'S']
        },
        {
            id: 6,
            image: women3,
            title: "Electric Blue Blended Kurta",
            price: "PKR 4610", 
            sizes: ['Xl', 'Lg', 'M']
        },
        {
            id: 7,
            image: Men1,
            title: "Green Blended Kurta",
            price: "PKR 5000",
            sizes: ['Xl', 'Lg', 'M', 'S']
        },
        { id: 8,
          image: Men2,
          title: "Gray Kurta",
          price: "PKR 6770",
          sizes: ['Xl', 'Lg', 'M']
        },
        { id: 9, image: Men3, title: "Electric Blue Blended Kurta", price: "PKR 4610", sizes: ['S', 'M'] },
    ];
    return (
        <>

            <SliderComponent />

            <div className='md:flex'>
                <SideMenu />

                <Card products={products} />
            </div>


        </>
    )
}

export default Home