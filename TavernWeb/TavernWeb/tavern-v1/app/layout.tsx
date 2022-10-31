import '../styles/globals.css';
import Image from 'next/image';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const buttonStyle0 = `flex flex1 flex-row justify-center items-center
    border-b-4 border-b-vaporwave-accent-2 bg-gradient-to-t 
    from-vaporwave-accent-2 text-vaporwave-secondary 
    py-2 px-4 mx-4 rounded-b hover:scale-125 transform transition 
    duration-500 ease-in-out shadow-xl shadow-vaporwave-dark-2`;

    return (
        <html lang="en">
            <head>
                <title>Tavern</title>
                <meta
                    name="description"
                    content="Find Your Adventuring party"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </head>
            <body className="bg-vaporwave-normal-2 text-vaporwave-primary">
                <div className="flex flex1 flex-row justify-evenly items-top">
                    <div className="w-1/5"> </div>
                    {/* the title goes in the middle */}
                    <div className="w-3/5 my-14">
                        <Image
                            src="/tavern-transparent.png"
                            alt="tavern-logo"
                            width={1400}
                            height={500}
                        />
                    </div>

                    {/* these buttons go to the right */}
                    <div className="flex flex1 flex-row">
                        <div className="flex flex1 flex-col justify-center items-center pr-8">
                            <a
                                href="/welcome/login"
                                className="button0 hover:scale-125 transform transition duration-500 ease-in-out"
                            >
                                Login
                            </a>
                        </div>
                        <div className="flex flex1 flex-col justify-center items-center pr-8">
                            <a
                                href="/welcome/signup"
                                className="button0 hover:scale-125 transform transition duration-500 ease-in-out"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
                {children}
            </body>
        </html>
    );
}
