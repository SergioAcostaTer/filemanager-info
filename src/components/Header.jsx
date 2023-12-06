import useTopScroll from "../hooks/useTopScroll";

const Header = () => {
    const top = useTopScroll();

    return (
        <header className={`w-full h-[80px] flex justify-between items-center fixed top-0 left-0 px-[40px] z-[1000] transition-all duration-300 ${top ? "bg-transparent" : "bg-white border-b-[2px] border-gray-300"}`}>
            <a className="flex items-center gap-2 cursor-pointer" href="/#home">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-gradient-to-r from-green-300 to-purple-400">
                    <img src="https://em-content.zobj.net/source/skype/289/file-folder_1f4c1.png" alt="FTP File Manager" className="w-[30px] object-contain" />
                </div>
                <h1 className="text-2xl font-bold">File Manager</h1>
            </a>

            <nav>
                <ul className="flex space-x-[40px] text-xl font-medium">
                    <li>
                        <a href="/#overview">Overview</a>
                    </li>
                    <li>Set Up</li>
                    <li>Features</li>
                    <li>FAQ</li>
                </ul>
            </nav>

            <div className="flex items-center space-x-4 w-[208px] justify-end">
            </div>

        </header>
    );
};

export default Header;