import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";
import { FaWhatsapp } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Best Books",
    link: "/#best_books",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Library",
    link: "/#library",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950" id="contact">
      <section className="container">
        <div className="grid grid-flow-row md:grid-flow-col">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Headless & Brainy Library
            </h1>
            <p className="">
            Discover our online bookshop! Explore a diverse selection of titles, enjoy personalized service, and experience fast delivery. 
            From classics to contemporary reads, we're your destination for literary exploration.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Agona Swedru, Ghana</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+233 543777190</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      {/* <span>&#11162;</span> */}
                     <a href={link.link}><span>{link.title}</span></a> 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved <br /> <b>Designed by &#8734; INFITECH ||
               <a href="whatsapp://send?phone=+233553319320"> WhatsApp Us</a> || 
               <a href="mailto:infinitybillionaire386@gmail.com"> &#128231; us</a>
               
               </b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
