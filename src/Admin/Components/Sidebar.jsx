import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { MdCategory, MdAccountCircle,MdSupportAgent } from 'react-icons/md';
import { AiOutlineUser, AiOutlineTag } from 'react-icons/ai';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const sideItems = [
    { url: "dashboard", text: "Dashboard", Icon: RiDashboardFill },
    { url: "categories", text: "Categories", Icon: MdCategory },
    { url: "subcategories", text: "SubCategories", Icon: MdCategory },
    { url: "products", text: "Products", Icon: RiShoppingBag3Fill },
    { url: "users", text: "Users", Icon: AiOutlineUser },
    { url: "customers", text: "Customers", Icon: MdAccountCircle },
    { url: "coupon", text: "Coupon", Icon: AiOutlineTag },
    { url: "enquiries", text: "Enquiries", Icon: MdSupportAgent },
  ];

  const closeSidebar = () => setSidebarOpen(false);
  console.log('Current pathname:', location.pathname);

  return (
    <>
      {/* Mobile Menu Icon */}
      <div className="sm:hidden fixed top-5 left-5 z-50">
        <Bars3Icon
          className="w-6 h-6 cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

    
       <div
        className={`bg-white h-screen  fixed  w-44 sm:w-52 z-40 transition-transform duration-300  ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } sm:translate-x-0`}
      >
      
        <h2 className="text-2xl font-bold mb-8 ml-12 -mt-11">Logo.</h2>

        
        {sideItems.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            onClick={closeSidebar}
            className={`flex items-center ml-3 space-x-3 py-2 px-4 transition ${
              location.pathname === `/admin/${item.url}` ? 'bg-blue-400 font-bold' : 'hover:bg-blue-100'
            }`}
          >
            <item.Icon className="w-5 h-5" />
            <span className="text-md">{item.text}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
