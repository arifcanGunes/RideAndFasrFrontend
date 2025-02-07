import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
import { RiSteeringFill } from "react-icons/ri"
import { FooterProps } from "../types/Footer/FooterProps"

const Footer = ({footerBgColor}: FooterProps) => {
    return (
        <footer id="contact" className={`px-10 xl:px-14 py-10 ${footerBgColor}`}>
            <div className="grid gap-6 md:gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                <section>
                    <div className="flex gap-1 items-center text-3xl mb-4">
                        <RiSteeringFill />
                        <h2>Ride<span className="bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">&Fast</span></h2>
                    </div>
                    <p className="text-gray-500 text-xl">
                        We offer the best electric cars of <br />
                        the most recognized brands in <br />
                        the world.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl">Company</h2>
                    <ul className="text-gray-500 text-lg">
                        <li>About</li>
                        <li>Cars</li>
                        <li>History</li>
                        <li>Shop</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl">Information</h2>
                    <ul className="text-gray-500 text-lg">
                        <li>Request a quote</li>
                        <li>Find a dealer</li>
                        <li>Contact us</li>
                        <li>Services</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl mb-3">Follow us</h2>
                    <ul className="text-gray-500 flex gap-4 text-2xl">
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaTwitter/></li>
                    </ul>
                </section>
            </div>
            <div className="text-lg text-gray-500 text-center lg:pt-14 pt-10">
                &#169; Ride <span className="bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent">&Fast</span>. All rigths reserved
            </div>
        </footer>
    )
}

export default Footer