


const AnimatedBackground = () => {
    return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-950 rounded-lg">
        {/*This is a div that will be teh containe for the shapes*/}

        <div className="relative h-full w-full bg[radial-gradient(#e5e7eb_1px,transparent_10px)] [background-size:16px_16px]">
            <div className="bubble x1 bg-yellow-400/20"></div>
            <div className="bubble x2 bg-blue-500/20"></div>
            <div className="bubble x3 bg-green-500/20"></div>
            <div className="bubble x4 bg-orange-800-500/20"></div>
            <div className="bubble x5 bg-red-500/20"></div>
        </div>
    </div>
    );
};

export default AnimatedBackground;