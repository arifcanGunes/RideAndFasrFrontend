import { FaTemperatureEmpty } from "react-icons/fa6";
import Navbar from "../../components/Navbar"
import { MenuItem } from "../../types/Navbar/MenuItem"
import { RightSideItems } from "../../types/Navbar/RightSideItem";
import { RiFlashlightFill } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import Footer from "../../components/Footer";

const FirstPage = () => {
  const menuItems: Array<MenuItem> = [
    {
      href: '#home',
      label: 'Home'
    },
    {
      href: '#about',
      label: 'About'
    },
    {
      href: '#popular',
      label: 'Popular'
    },
    {
      href: '#contact',
      label: 'Contact'
    }
  ];

  const rightSideItems: Array<RightSideItems> = [
    {
      href: '/login',
      label: 'Log In'
    },
    {
      href: '/signUp',
      label: 'Sign Up'
    }
  ]

  return (
    <div className="text-white">
      <Navbar menuItems={menuItems} rightSideItems={rightSideItems} navBgColor="bg-firstPageBodyColor" />

      <main className="flex flex-col gap-10 lg:gap-24 w-full bg-firstPageBodyColor h-full px-4 py-6 lg:px-10 lg:py-12">
        <section id="home" className="flex flex-col gap-8 items-center">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] bg-slate-700/80 rounded-full blur-3xl absolute -left-[9rem] -top-[.5rem]"></div>
          <div className="flex flex-col items-center text-center justify-center gap-4">
            <div className="relative">
              <h1 className="text-2xl pb-2 md:text-3xl lg:text-4xl">Choose The Best Car With</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl">
                <span>Ride</span>
                <span className="bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">&Fast</span>
              </h2>
            </div>
            <p className="text-lg">Porsche Mission E</p>
            <div className="flex items-center gap-1">
              <RiFlashlightFill className="text-blue-500" />
              <span className="text-lg">Electric Car</span>
            </div>

            <img className="w-[80%] max-w-[700px] pt-4" src='../../src/assets/img/home.png' alt="homePng" />
          </div>
          <div className="flex justify-between w-[75%] max-w-[500px] relative right-3 items-center text-lg lg:text-xl">
            <div className="flex flex-col items-center">
              <FaTemperatureEmpty className="pb-2 w-7 h-7" />
              <span>24°</span>
              <span>Temparature</span>
            </div>
            <div className="flex flex-col items-center">
              <CiTimer className="pb-2 w-7 h-7" />
              <span>863</span>
              <span>Millage</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFlashlightFill className="pb-2 w-7 h-7" />
              <span>94%</span>
              <span>Battery</span>
            </div>
          </div>
          <div id="startBtn" className="pt-3">
            <div id="buttonBox" className="p-2 border-2 border-green-600 rounded-full hover:shadow-lg hover:shadow-green-500 transition-shadow duration-500">
              <button className="text-xl w-[90px] h-[90px] border-2 border-green-700 rounded-full">Start</button>
            </div>
          </div>
        </section>

        <section id="about" className="flex flex-col gap-8 text-gray-400 sm:gap-10 lg:flex-row lg:items-center" >
          <div className="relative lg:w-1/2">
            <img src="../../src/assets/img/about.png" className="w-[90%] max-w-[550px] mx-auto rounded-lg" alt="" />
            <div className="absolute w-[50%] md:max-w-44 lg:max-w-52 sm:w-[30%] sm:left-[60%] z-10 bottom-2 left-[42%] text-center px-2 py-2 font-thin bg-black/100 text-sm text-white backdrop-blur-xl rounded-md">
              <h4>2500+</h4>
              <p>Supercharges placed along popular routes</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:gap-10 lg:w-1/2">
            <h2 className="text-xl text-center md:text-2xl">Machines With <br /> Future Technology</h2>
            <p className="w-[75%] mx-auto lg:w-full lg:text-xl">
              See the future with high-performance electric cars produced by
              renowned brands. They feature futuristic builds and designs with
              new and innovative platforms that last a long time.
            </p>
            <div className="pl-5 text-center">
              <button className="text-white bg-blue-600 px-4 py-3 sm:px-6 sm:py-4 rounded-lg">Know More</button>
            </div>
          </div>
        </section>

        <section id="popular" className="flex flex-col gap-16 md:px-5 lg:px-16 laptop:px-10">
          <div>
            <h2 className="text-center text-2xl lg:text-3xl">Choose Your Electric Car <br /> Of The Porsche Brand </h2>
          </div>
          <div id="cards" className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] ">
            <div id="card" className="sm:max-w-[500px] lg:max-w-[100%] relative overflow-y-hidden bg-gray-800 flex flex-col px-7 py-4 gap-5 rounded-lg w-[90%] mx-auto">
              <div className="w-[200px] h-[200px] bg-blue-500/80 blur-3xl absolute -top-16 left-16"></div>
              <div className="relative flex gap-1 flex-col px-2 pt-3">
                <span className="text-2xl">Porsche</span>
                <span className="text-xl">Turbo S</span>
              </div>
              <img className="relative w-[80%] mx-auto" src="../../src/assets/img/popular1.png" alt="popular1" />
              <div className="flex w-[90%] sm:w-[75%] justify-between mx-auto">
                <div className="flex flex-col items-center gap-2">
                  <CiTimer className="w-5 h-5" />
                  <span className="text-lg">3.7 Sec</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SlSpeedometer className="w-5 h-5" />
                  <span className="text-lg">356 km/h</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <BsFuelPumpDieselFill className="w-5 h-5" />
                  <span className="text-lg">Electric</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl">$175,900</p>
              </div>
              <div className="text-center">
                <button className="px-4 py-3 border-2 border-gray-400 rounded-lg">Show Details</button>
              </div>
            </div>
            <div id="card" className="sm:max-w-[500px] lg:max-w-[100%] relative overflow-y-hidden bg-gray-800 flex flex-col px-7 py-4 gap-5 rounded-lg w-[90%] mx-auto">
              <div className="w-[200px] h-[200px] bg-blue-500/80 blur-3xl absolute -top-16 left-16"></div>
              <div className="relative flex gap-1 flex-col px-2 pt-3">
                <span className="text-2xl">Porsche</span>
                <span className="text-xl">Taycan</span>
              </div>
              <img className="relative w-[80%] mx-auto" src="../../src/assets/img/popular2.png" alt="popular1" />
              <div className="flex  w-[90%] sm:w-[75%] justify-between mx-auto">
                <div className="flex flex-col items-center gap-2">
                  <CiTimer className="w-5 h-5" />
                  <span className="text-lg">3.7 Sec</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SlSpeedometer className="w-5 h-5" />
                  <span className="text-lg">356 km/h</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <BsFuelPumpDieselFill className="w-5 h-5" />
                  <span className="text-lg">Electric</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl">$114,900</p>
              </div>
              <div className="text-center">
                <button className="px-4 py-3 border-2 border-gray-400 rounded-lg">Show Details</button>
              </div>
            </div>
            <div id="card" className="sm:max-w-[500px] lg:max-w-[100%] relative overflow-y-hidden bg-gray-800 flex flex-col px-7 py-4 gap-5 rounded-lg w-[90%] mx-auto">
              <div className="w-[200px] h-[200px] bg-blue-500/80 blur-3xl absolute -top-16 left-16"></div>
              <div className="relative flex gap-1 flex-col px-2 pt-3">
                <span className="text-2xl">Porsche</span>
                <span className="text-xl">Turbo S Cross</span>
              </div>
              <img className="relative w-[80%] mx-auto" src="../../src/assets/img/popular3.png" alt="popular1" />
              <div className="flex w-[90%] sm:w-[75%] justify-between mx-auto">
                <div className="flex flex-col items-center gap-2">
                  <CiTimer className="w-5 h-5" />
                  <span className="text-lg">3.7 Sec</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SlSpeedometer className="w-5 h-5" />
                  <span className="text-lg">356 km/h</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <BsFuelPumpDieselFill className="w-5 h-5" />
                  <span className="text-lg">Electric</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl">$150,900</p>
              </div>
              <div className="text-center">
                <button className="px-4 py-3 border-2 border-gray-400 rounded-lg">Show Details</button>
              </div>
            </div>
            <div id="card" className="sm:max-w-[500px] lg:max-w-[100%] relative overflow-y-hidden bg-gray-800 flex flex-col px-7 py-4 gap-5 rounded-lg w-[90%] mx-auto">
              <div className="w-[200px] h-[200px] bg-blue-500/80 blur-3xl absolute -top-16 left-16"></div>
              <div className="relative flex gap-1 flex-col px-2 pt-3">
                <span className="text-2xl">Porsche</span>
                <span className="text-xl">Boxster 718</span>
              </div>
              <img className="relative w-[80%] mx-auto" src="../../src/assets/img/popular4.png" alt="popular1" />
              <div className="flex w-[90%] sm:w-[75%] justify-between mx-auto">
                <div className="flex flex-col items-center gap-2">
                  <CiTimer className="w-5 h-5" />
                  <span className="text-lg">3.7 Sec</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SlSpeedometer className="w-5 h-5" />
                  <span className="text-lg">356 km/h</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <BsFuelPumpDieselFill className="w-5 h-5" />
                  <span className="text-lg">Electric</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl">$125,900</p>
              </div>
              <div className="text-center">
                <button className="px-4 py-3 border-2 border-gray-400 rounded-lg">Show Details</button>
              </div>
            </div>
            <div id="card" className="sm:max-w-[500px] lg:max-w-[100%] relative overflow-y-hidden bg-gray-800 flex flex-col px-7 py-4 gap-5 rounded-lg w-[90%] mx-auto">
              <div className="w-[200px] h-[200px] bg-blue-500/80 blur-3xl absolute -top-16 left-16"></div>
              <div className="relative flex gap-1 flex-col px-2 pt-3">
                <span className="text-2xl">Porsche</span>
                <span className="text-xl">Cayman</span>
              </div>
              <img className="relative w-[80%] mx-auto" src="../../src/assets/img/popular5.png" alt="popular1" />
              <div className="flex w-[90%] sm:w-[75%] justify-between mx-auto">
                <div className="flex flex-col items-center gap-2">
                  <CiTimer className="w-5 h-5" />
                  <span className="text-lg">3.7 Sec</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SlSpeedometer className="w-5 h-5" />
                  <span className="text-lg">356 km/h</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <BsFuelPumpDieselFill className="w-5 h-5" />
                  <span className="text-lg">Electric</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl">$128,900</p>
              </div>
              <div className="text-center">
                <button className="px-4 py-3 border-2 border-gray-400 rounded-lg">Show Details</button>
              </div>
            </div>
          </div>
        </section>

        <section id="logos" className="px-10 lg:px-14 mx xl:pl-[120px] py-12">
          <div className="grid gap-16 grid-cols-[repeat(auto-fit,minmax(60px,1fr))] items-center">
            <img className="max-w-[60px]" src="../../src/assets/img/logo1.png" alt="logo1" />
            <img className="max-w-[60px]" src="../../src/assets/img/logo2.png" alt="logo2" />
            <img className="max-w-[60px]" src="../../src/assets/img/logo3.png" alt="logo3" />
            <img className="max-w-[60px]" src="../../src/assets/img/logo4.png" alt="logo4" />
            <img className="max-w-[60px]" src="../../src/assets/img/logo5.png" alt="logo5" />
            <img className="max-w-[60px]" src="../../src/assets/img/logo6.png" alt="logo6" />
          </div>
        </section>
      </main>
      <Footer footerBgColor="bg-firstPageBodyColor"/>
    </div>
  )
}

export default FirstPage