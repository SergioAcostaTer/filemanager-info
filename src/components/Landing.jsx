/* eslint-disable react/prop-types */

const Circle = ({ loc, c, blur = "150px" }) => {
    return (
        <svg
            className={`w-[900px] animate-spin-slow blur-[${blur}] text-[${c}] absolute ${loc} z-[-1]`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
        >
            <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
    );
}

const Landing = () => {
    return (
        <div className="w-full h-screen flex flex-col pt-[200px] px-[40px] items-center justify-between relative">

            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[-1] overflow-hidden">
                <Circle c="#1E40AF" loc="bottom-[-250px] right-[-200px]" />
                <Circle c="#F7D9EC" loc="bottom-[-250px] left-[-200px]" blur="80px" />
            </div>

            <div>
                <div className="flex items-center space-x-4">
                    <h1 className="text-7xl font-bold">FTP File Manager</h1>
                    <img src="https://em-content.zobj.net/source/skype/289/file-folder_1f4c1.png" alt="FTP File Manager" className="w-[70px] object-contain" />
                </div>

                <a className="rounded-xl p-[10px] mt-[30px] bg-white shadow-lg flex items-center space-x-4 border border-gray-300 hover:border-gray-400 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer" href="https://github.com/SergioAcostaTer/ftp-front" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
                        className="w-[26px] h-[26px]"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    <p className="inline-block ml-[10px]">Check out the source code</p>
                </a>
            </div>
            <div className="p-[4px] pb-0 rounded-t-xl bg-gradient-to-r from-green-300 to-purple-400">
                <img src="image.png" alt="FTP File Manager" className="w-[1000px] object-contain rounded-t-xl aspect-video object-cover" />
            </div>
        </div>
    );
}

export default Landing;

