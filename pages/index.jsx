import Image from "next/image"
import ImgDesktop from "../assets/img-desktop.jpg"
import ImgMobile from "../assets/img-mobile.jpg"
import Cart from "../assets/icon-cart.svg"

export default function Home() {

  return (
    <main className=" bg-cream min-h-screen lg:items-center lg:flex max-w-[1440px] lg:mx-auto flex items-center">

      <div className="rounded-xl lg:grid lg:grid-cols-2 bg-white lg:h-4/5 lg:w-1/2 mx-auto lg:justify-center w-11/12">

        <div className="hidden lg:block">
            <Image
              className="rounded-l-xl"
              src={ImgDesktop} 
              alt="image"/>
        </div>

        <div className="lg:hidden block">
            <Image
              className="rounded-t-xl"
              src={ImgMobile} 
              alt="image" />
        </div>

        <div className=" lg:py-12 lg:space-y-8 lg:mx-12 py-6 px-6 lg:px-0 space-y-4">

          <h6 className=" font-montserrat uppercase text-dark_gray_blue lg:text-sm text-xs">P e r f u m e</h6>

          <h1 className=" font-fraunces font-bold text-dark_blue lg:text-4xl text-3xl">Gabrielle Essence Eau De Parfum</h1>

          <p className="font-montserrat text-dark_gray_blue lg:text-base text-sm">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

          <div className=" flex justify-between items-center">

            <p className="text-light_cyan text-4xl font-fraunces ">$149.99</p>

            <p className=" font-montserrat text-sm text-dark_gray_blue line-through justify-items-center mr-12">$169.99</p>

          </div>

          <div className=" bg-light_cyan justify-center items-center p-3 rounded-lg flex gap-2 hover:bg-dark_cyan cursor-pointer border border-dark_gray_blue">

            <Image src={Cart} alt="cart" />

            <p className=" text-white font-montserrat font-bold text-lg">Add to Cart</p>

          </div>

        </div>

      </div>

    </main>
  )
}
