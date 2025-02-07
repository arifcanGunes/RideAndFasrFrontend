import { useEffect, useState } from "react"
import { MenuItemProps } from "../types/Navbar/MenuItemProps"
import { RxCross2 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { RiSteeringLine } from "react-icons/ri";


const Navbar = ({ menuItems, rightSideItems, navBgColor }: MenuItemProps) => {

  const navigate = useNavigate();

  const menuVariants = {
    closed: {
      opacity: 0,
      top: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      top: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [smallScreenActiveMenu, setSmallScreenActiveMenu] = useState(0);
  const [largeScreenActiveMenu, setLargeScreenActiveMenu] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrollDown(true);
      }

      else {
        setIsScrollDown(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  useEffect(() => {
    console.log(smallScreenActiveMenu);
  }, [smallScreenActiveMenu])

  return (
    <header className="sticky top-0 right-0 z-20">
      <div className={`flex justify-between pt-7 pb-5 px-9 lg:px-16 items-center text-white ${isScrollDown ? 'backdrop-blur-lg' : navBgColor}`}>
        <div id="logo" className="flex text-2xl lg:text-3xl items-center gap-2">
          <RiSteeringLine className="relative top-[0.75px]" />
          <div>
            <span>Ride</span>
            <span className="bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">&Fast</span>
          </div>
        </div>

        <nav id="nav" >
          <ul className="hidden lg:flex lg:text-lg xl:text-xl lg:gap-8 gap-6 font-mono">
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => {
                setLargeScreenActiveMenu(index)
              }} className={`relative before:content-[''] before:absolute before:-bottom-1 before:left-[40%] before:w-3 before:h-1 before:rounded-md before:bg-cyan-800 before:opacity-0 hover:before:opacity-100 hover:before:transition-opacity hover:before:duration-700 hover:before:ease-in-out ${largeScreenActiveMenu === index ? 'before:opacity-100' : ''}`}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="buttons" className="flex items-center gap-5 font-mono lg:text-lg xl:text-xl xl:gap-7">

          {rightSideItems.map((item, index) => (
            <button key={index} className="hidden md:inline-block md:text-lg">
              <Link to={item.href}>{item.label}</Link>
            </button>
          ))}

          <button className="lg:hidden" onClick={() => setIsMenuOpened(!isMenuOpened)}>
            {isMenuOpened ? <RxCross2 className="size-6" /> : <CiMenuBurger className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpened && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-full bg-gray-100/80 backdrop-blur-3xl shadow-lg z-40 text-black"
          >
            <div className="pt-12 px-4 pb-4 bg-gradient-to-b from-gray-100/90 to-gray-200/90">
              <nav>
                <ul className="max-w-lg mx-auto space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.li
                      onClick={() => {
                        setSmallScreenActiveMenu(index);
                        setIsMenuOpened(false);
                        if (item.href.startsWith('#')) {
                          const element = document.querySelector(item.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          navigate(item.href);
                        }
                      }}
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`cursor-pointer p-3 rounded-lg transition-colors text-center backdrop-blur-sm shadow-sm ${smallScreenActiveMenu === index ? 'bg-black/80 text-white' : 'bg-white/60'}`}
                    >
                      <a href={item.href}>{item.label}</a>
                    </motion.li>
                  ))}

                  {rightSideItems.map((item, index) => (
                    <motion.li
                      onClick={() => {
                        setSmallScreenActiveMenu(menuItems.length + index);
                        setIsMenuOpened(false);
                        navigate(item.href);
                      }}
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0, duration: 0.2 }}
                      className={`md:hidden cursor-pointer p-3 rounded-lg transition-colors text-center backdrop-blur-sm shadow-sm ${smallScreenActiveMenu === menuItems.length + index ? 'bg-black/80 text-white' : 'bg-white/60'}`}

                    >
                      <a className="flex items-center justify-center" href={item.href}>{item.label}</a>
                    </motion.li>
                  ))}

                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}

export default Navbar