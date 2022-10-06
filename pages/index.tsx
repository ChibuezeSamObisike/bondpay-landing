/* eslint-disable @next/next/no-img-element */
import Img from "../assets/Screenshot.png";
import GoogleIcon from "../assets/google-play.90933971 1.svg";
import AppleIcon from "../assets/app-store.7f9e10a4 1.svg";
import Image from "next/image";
import Navbar from "../components/navbar";
import Button from "../shared/button";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className='min-h-screen flex justify-around items-center p-4 flex-col sm:flex-row'>
        <div className='basis-1/3'>
          <h1 className='text-6xl font-semibold leading-tight mb-4 text-center sm:text-left'>
            Crypto payment{" "}
            <span className='secondary-color-text'>Framework</span> built with
            love
          </h1>
          <p className='text-center sm:text-left'>
            BonPay is a social payment app that allows you to seamlessly send
            and receive inter-national and intra-national remittances in
            cryptocurrency.
          </p>
          <div className='mt-6 flex justify-center items-center sm:justify-start'>
            <Button variant='primary' className='mr-4'>
              Docs
            </Button>
            <Button variant='secondary'>Get started </Button>
          </div>
        </div>
        <div>
          <img className='img-header' src={Img.src} alt='Image' />
        </div>
      </div>
    </>
  );
}
