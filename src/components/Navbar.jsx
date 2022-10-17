// import React from "react"
import companyLogo from '../images/Logo.png'
import React from "react";
import {Link} from 'react-scroll'


function Nav() {
  return (
    <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-600 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://testing.com/" class="flex items-center">
          <img src={companyLogo}  class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
        </a>
      <div class="flex items-center lg:order-2">
        <Link to="contact" spy={true} smooth={true}><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Stay Updated</button></Link>
      </div>
  </div>
</nav>
    
  );
}

export default Nav;