
import SliderComponent from '../Components/Slider/SliderComponent'
// import SideMenu from "../Components/SideMenu"
import HomeCard from "../Components/HomeCard"

import { useQuery } from '@tanstack/react-query'






const Home = () => {

    // fetch products
    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await fetch('/api/v1/products/get-products')
            if (!response.ok) {
                throw new Error("Failed to fetch Products....")
            }
            // console.log("Response fetche correctly"+response)
            const result = await response.json()
            // console.log("Data fetched correctly"+result)
            return result.data
        }

    })
    return (
        <>

            <SliderComponent />
          

            {/* <SideMenu /> */}
            <div>

                <h2><p className='text-2xl ml-9 font-bold text-[#303030] font-dmserif'>Shop By Men's Category</p></h2>
            </div>
              <HomeCard />
            {/* <Card products={products} /> */}

        </>
    )
}

export default Home