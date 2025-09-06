import logo17 from "../assets/logo17-removebg-preview.png";
import img5 from "../assets/logo5-removebg-preview.png";
import Section from "./ScrollSection";

const Header = () => {
  return (
    <Section>
      <div className="bg-[url(./assets/img3.png)] w-full bg-center h-dvh bg-cover relative">
        <nav className="flex justify-between items-center w-full px-5 md:px-10 g:px-20 text-white font-bold z-10 py-5 absolute top-0 left-0">
          <a href="" className="flex items-center gap-2">
            <div className="w-[70px]">
              <img src={logo17} alt="skoblin" />
            </div>
            <h1 className=" text-base md:text-2xl lg:text-4xl">SKOBLIN</h1>
          </a>
          <button className="border px-5 py-2 text-2xl rounded-full cursor-pointer transition-colors duration-300 hover:text-green-400 hover:border-green-400 hover:bg-black/40">
            Buy Now
          </button>
        </nav>
        <section className="flex flex-col items-center justify-center h-full relative">
          <div className="w-[400px] md:w-[500px]">
            <img
              src={img5}
              className="w-full object-contain animate-bounce animation-duration-[3000ms]"
              alt="skoblin"
            />
          </div>
          <p className="text-xl sm:text-2xl text-green-400 px-6 text-center absolute bottom-55">
            "Some say the forest remembers. The Skoblins? They never forgot."
          </p>
        </section>
      </div>
    </Section>
  );
};

export default Header;
