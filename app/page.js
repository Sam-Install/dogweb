import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Abouts from "./Components/Abouts";
import Choose from "./Components/Choose";
import Location from "./Components/Location";
import FAQ from "./Components/FAQ";
import ContactBanner from "./Components/ContactBanner";
import Footer from "./Components/Footer";

export default function Home() {
  return (

    <>

    <Navbar/>
    <Hero/>
    <Abouts/>
    <Choose/>
    <Location/>
    <FAQ/>
    <ContactBanner/>
    <Footer/>
    
    </>

  );
}
