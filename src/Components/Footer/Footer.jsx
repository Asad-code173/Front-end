import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="bg-white shadow">
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <strong>
                <p className="text-lg mb-4 px-5 md:px-15 uppercase text-[#2d2b2a]">Help</p>
              </strong>
              <p className="mb-1 px-5 md:px-15 text-[#2d2b2a] text-sm leading-5 font-normal">
                <Link to='/trackorder'>Track Your Order</Link>
              </p>
              <p className="mb-1 px-5 md:px-15 text-[#2d2b2a] text-sm leading-5 font-normal">
                Terms and Conditions
              </p>
              <p className="mb-1 px-5 md:px-15 text-[#2d2b2a] text-sm leading-5 font-normal">
                Privacy Policy
              </p>
              <p>
                <a className="text-white" href="mailto:eshop@junaidjamshed.com">eshop@junaidjamshed.com</a>
              </p>
            </div>

            <div>
              <strong><h3 className="text-lg uppercase px-5">Customer Service</h3></strong>
              <ul>
                <li className="mb-1 px-5 text-[#2d2b2a] text-sm leading-5 font-normal"><a href="#" className="hover:underline">Customer Service</a></li>
                <li className="mb-1 px-5 text-[#2d2b2a] text-sm leading-5 font-normal"><a href="#" className="hover:underline">Store Locator</a></li>
                <li className="mb-1 px-5 text-[#2d2b2a] text-sm leading-5 font-normal"><a href="#" className="hover:underline">Disclaimer</a></li>
                <li className="mb-1 px-5 text-[#2d2b2a] text-sm leading-5 font-normal"><a href="#" className="hover:underline">Delivery</a></li>
                <li className="mb-1 px-5 text-[#2d2b2a] text-sm leading-5 font-normal"><a href="#" className="hover:underline">Exchange</a></li>
                <li className="mb-1 px-5 text-[#2d2b2a] text-sm leading-5 font-normal"><a href="#" className="hover:underline">FAQS</a></li>
              </ul>
            </div>

            <div>
              <strong><h3 className="text-xl px-5 mb-4 uppercase">More From Khaddi</h3></strong>
              <ul>
                <li className="mb-1 px-5 text-[#2d2b2a] text-sm leading-5 font-normal"><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                <li className="mb-1 px-5 text-[#2d2b2a] text-sm leading-5 font-normal"><Link to="/about" className="hover:underline">About Us</Link></li>
              </ul>
            </div>

            <div>
              <strong><h3 className="text-xl mb-4 px-5 uppercase">Get in Touch</h3></strong>
              <div className="flex space-x-2">
                <PhoneIcon className='w-5 h-5 mb-1' />
                <p className='text-sm text-[#2d2b2a] mb-1'>03231219136</p>
              </div>
              <div className="flex space-x-2">
                <EnvelopeIcon className='w-5 h-5' />
                <p className='text-sm text-[#2d2b2a]'>customercare@M-store.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <img className='ml-5 w-18 h-10 mb-1 mt-5 md:mt-0 md:ml-auto object-cover' src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw6994d6b6/images/FooterImages/Khaadi-Logo.png" alt="" />
          <p className='text-[12px] px-4 md:text-xs mb-8 md:mb-1'>Copyright © 2023 M-Store Pakistan (SMC-Pvt) Limited. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
