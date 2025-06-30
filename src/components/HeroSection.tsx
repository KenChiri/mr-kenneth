import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
    return (
        <div 
      className="
        relative flex flex-col h-96 md:flex-row items-center p-8 md:p-12 rounded-s overflow-hidden border border-white/10 bg-slate-800/10 backdrop-blur-lg "
    >

      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-400">Kenneth</span>.
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a dedicated and passionate software developer with a knack for building elegant,
          efficient, and user-centric web applications. My expertise lies in the modern
          JavaScript ecosystem, particularly with Next.js and React, to bring ideas to life.
        </p>
      </div>
      <div className="md:mr-12 mb-8 md:mb-0 flex-shrink-0">
        <Image
          src="" // Make sure this path is correct in your /public folder
          alt="A photo of Mr. Kenneth"
          width={200}
          height={200}
          className="rounded-xl object-center border-2 border-gray-400 shadow-lg"
          priority // Add priority to the main hero image for faster loading
        />
      </div>
      
    </div>

    );
};

export default HeroSection