import Terminal from "./Terminal"



const SetUp = () => {

    return (
        <div className="py-[100px] px-[40px] flex flex-col items-center justify-center" id="setup">

            <ol className="py-[100px] px-[40px] flex flex-col items-center justify-center w-[800px]" id="setup">
                <li className="flex space-x-4 w-full">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gradient-to-r from-green-300 to-purple-400">
                            <p className="text-2xl font-bold">1</p>
                        </div>
                        <div className="flex flex-col h-full justify-center w-[2px] bg-gray-300 flex-1"></div>
                    </div>
                    <div className="flex flex-col justify-center pt-[60px] pb-[15px]">
                        <h2
                            className="text-2xl font-bold"
                        >Clone the Back End repository</h2>
                        <p
                            className="text-xl"
                        >Run the following command in the terminal:</p>
                        <Terminal text="git clone https://github.com/SergioAcostaTer/ftp-back.git" />
                    </div>
                </li>
                <li className="flex space-x-4 w-full">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gradient-to-r from-green-300 to-purple-400">
                            <p className="text-2xl font-bold">2</p>
                        </div>
                        <div className="flex flex-col h-full justify-center w-[2px] bg-gray-300 flex-1"></div>
                    </div>
                    <div className="flex flex-col justify-center pt-[50px]">
                        <h2
                            className="text-2xl font-bold"
                        >Deploy it into Render or Heroku</h2>
                        <p
                            className="text-xl"
                        >You should upload the next .env variables to the server:</p>
                        <Terminal text={
                            `
                            FTP_HOST=YOUR_FTP_HOST

                            FTP_USER=YOUR_FTP_USER

                            FTP_PASSWORD=YOUR_FTP_PASSWORD

                            FTP_SECURE=false

                            SMTP_HOST=YOUR_SMTP_HOST

                            SMTP_PORT=YOUR_SMTP_PORT

                            EMAIL=YOUR_EMAIL
                            
                            EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD
                            `
                        }
                        />
                    </div>
                </li>
                
            </ol>

        </div>
    )
}


export default SetUp