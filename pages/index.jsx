import Image from "next/image"
import ImgDesktop from "../assets/img-desktop.jpg"
import ImgMobile from "../assets/img-mobile.jpg"
import Cart from "../assets/icon-cart.svg"

export default function Home() {

  return (
    <main className="bg-cream max-w-[1440px] mx-auto min-w-[375px]">

      <div className="min-h-screen md:grid flex items-center md:items-center">

        <div className=" shadow-lg rounded-xl md:grid md:grid-cols-2 bg-white md:h-[490px] md:w-[625px] mx-auto md:justify-center w-[375px]">

          <div className="hidden md:block">
              <Image
                className="rounded-l-xl"
                src={ImgDesktop} 
                alt="image"
                height={942}/>
          </div>

          <div className="block md:hidden">
              <Image
                className="rounded-t-xl"
                src={ImgMobile} 
                alt="image" />
          </div>

          <div className=" py-6 px-10 space-y-4 md:space-y-6 md:py-6 md:px-6 ">

            <h6 className=" font-montserrat uppercase text-dark_gray_blue md:text-sm text-xs">P e r f u m e</h6>

            <h1 className=" font-fraunces font-bold text-dark_blue md:text-4xl text-3xl">Gabrielle Essence Eau De Parfum</h1>

            <p className="font-montserrat text-dark_gray_blue md:text-base text-sm">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

            <div className=" flex justify-between items-center">

              <p className="text-light_cyan text-4xl font-fraunces ">$149.99</p>

              <p className=" font-montserrat text-sm text-dark_gray_blue line-through justify-items-center md:mr-8 mr-16">$169.99</p>

            </div>

            <div className=" bg-light_cyan justify-center items-center p-3 rounded-lg flex gap-2 hover:bg-dark_cyan cursor-pointer">

              <Image src={Cart} alt="cart" />

              <p className=" text-white font-montserrat font-bold text-lg">Add to Cart</p>

            </div>

          </div>

        </div>

      </div>

      <div class="text-center text-xs py-2">
        Challenge by <a className="text-link_blue underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a className="text-link_blue underline"  href="https://www.frontendmentor.io/profile/ktscates">Cates Nsengiyumva</a>.
      </div>

    </main>
  )
}
