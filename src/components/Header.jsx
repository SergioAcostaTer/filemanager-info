
const Header = () => {
    return (
        <header className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 px-[40px]">
            <h1>FileManager</h1>

            <nav>
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Files</li>
                    <li>Settings</li>
                </ul>
            </nav>

            <div>
                cosas
            </div>

        </header>
    );
};

export default Header;