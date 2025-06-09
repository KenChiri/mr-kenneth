import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-20 bg-gray-950 border-b border-gray-800 z-50 ">
          <div className="flex items-center justify-between h-full px-6 ">
            <div className="text-yellow-300  text-2xl font-mono">
                Kenneth.com
            </div>
            
            <div className="hidden md:flex space-x-6">
            <Link rel="stylesheet" href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
            </Link>

          </div>
          </div>
         
        </nav>

    );
};

export default Navbar