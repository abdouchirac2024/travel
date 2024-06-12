import React from 'react'
import { NavLink, Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa"


//ici cest la fonction pour groupe liste 

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = () => {
  return (
    <>
      {/* ici c'est le primier div du home page du tout le site web */}
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
        {/* ici c'est le div pour la couleur vert claire qui s'affiche avec 20% la */}

        <div className=' bg-gradient-to-r from-blue-500 to-blue-700 text-white'>
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
              <p>20% off on next booking</p>
              <p>Mobile No. 237658488485</p>
            </div>
          </div>
        </div>
        {/**  ici c'est la prochaine composant de dive  */}
        <div className="container py-3 sm:py-0">
          <div className='flex justify-between items-center'>
            {/* ici c'est le div du logo*/}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={LogoImg} alt=''
                  className='h-16'
                />
              </Link>

            </div>
            {/** ici c'est le div de la Navigation NavlinKs */}
            {/** ici le div la class tailwind css doit adapte sur le desktop la naviagtion */}
            <div className="hidden md:block">
              {/** ici la balise ul c'est pour le menu de manier aligne horizontal avec tailwind css */}
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink to="/"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}>
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/places"
                    activeClassName="active"

                    onClick={() => window.scrollTo(0, 0)}>
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}>
                    About
                  </NavLink>
                </li>
                {/** ici c'est le Dropdown section pour le select  */}
                <li className='py-4 relative group cursor-pointer'>
                  <div className='dropdown  flex items-center'>
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown
                        className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md
                  text-black w-[150px] bg-white p-2">
                    <ul>
                      {/** ici c'est pour faire appele au different sous menu de dropdownlinks */}
                      {DropdownLinks.map((data) => {
                        return (
                          <li key={data.name}>
                            <a
                              className="inline-block w-full rounded-md p-2 hover:bg-blue-500/20"
                              href={data.link}
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/** ici c'est la place pour implement le button Book Now comme on implement acces membre dans ADNA */}

            <div>
              {/** Book Now button */}
            </div>
            <div>
              <button
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-600 text-white px-3 py-1 rounded-full"
              >
                Book Now
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
