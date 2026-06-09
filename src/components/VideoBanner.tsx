import videoBg from "@/assets/background-video.mp4";
import { Link } from "react-router-dom";

const VideoBanner = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-gold-light/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        
        {/* Subtitle */}
        <p className="mb-5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-gold-light backdrop-blur-md sm:text-sm md:text-base">
          Classical Indian Dance Academy
        </p>

        {/* Heading */}
        <h1 className="bg-gradient-to-r from-white via-amber-100  to-gold-light bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
         <span className="text-primary "> Kavinaya </span>Natiyalaya
        </h1>

        {/* Divider */}
        <div className="my-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold-light to-amber-300 shadow-lg shadow-amber-400/40" />

        {/* Description */}
        <p className="max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl lg:text-2xl">
          Where Tradition Dances with Grace, Expression, and Timeless
          Artistry. Experience the divine beauty of Dance through
          discipline, culture, and soulful performance.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          
          {/* <button className="rounded-full bg-gold-light px-8 py-3 text-sm font-semibold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-amber-300 sm:text-base">
            Explore Classes
          </button> */}

          <button className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:text-base">
              <Link to="/about"> Read More</Link>
            
          </button>
          

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default VideoBanner;


