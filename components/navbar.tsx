import React from "react";
import Img from "../assets/Bonpay 1.svg";
import Button from "../shared/button";

export default function Navbar() {
  return (
    <div className='flex items-center justify-between px-40 pt-10'>
      <img src={Img.src} alt='logo' />
      <div className='flex items-center justify-between'>
        <a className='px-4'>Products</a>
        <a className='px-4'>Company</a>
        <a className='px-4'>Career</a>
        <Button variant='secondary'>Pay now</Button>
      </div>
    </div>
  );
}
