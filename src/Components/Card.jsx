import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"

export default function Card({ products }) {
  const dispatch = useDispatch();

  const addcart = (product) => {
    dispatch(addToCart(product));
  };

  const notify = () => {
    toast.success("Item Added", {
      autoClose: 200,
    });
  };
  
  return (
  
    < div className = "container mx-auto p-8 cursor-pointer" >
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products?.map((product) => (

          <div key={product._id}>
            <Link to={`/mens/${product.slug}`}>
              <div className="w-full overflow-hidden rounded-lg border border-black">
                <img src={product.photo} alt={product.name} />
              </div>

              <div className="text-center mt-2 text-xs font-bold">
                {product.name}
              </div>


              {/* <div className="text-center text-sm text-gray-600 mt-1">
              {product.description}
            </div> */}

              <div className="mt-3 font-bold">
                {product.variants[0]?.price
                  ? `PKR ${product.variants[0].price}`
                  : "Price not available"}
              </div>

              <div className="sizes flex justify-center space-x-2 mt-2">
                {product.variants?.map((variant, index) => (
                  <span
                    key={index}
                    className="flex items-center justify-center w-8 h-8 p-2 bg-gray-200 rounded-full"
                  >
                    {variant.size}
                  </span>
                ))}
              </div>
            </Link>


            <button
              onClick={() => {
                addcart(product);
                notify();
              }}
              className="w-full px-6 py-2 mt-6 mb-4 bg-white hover:text-white hover:bg-black border-2 border-black"
            >
              Add to Cart
            </button>

            <ToastContainer />

          </div>
        ))}

      </div>
    </div >


  );
}
