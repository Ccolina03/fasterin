import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

function Header(){

    return <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className ="flex items-center space-x-3">
            <Link href='/'>
                <Image src={require(".//../images/logo.png")}
                width={50}
                height={50}
                alt="Home"/>
            </Link>
            <h1 className="text-lg"> 
                Fasterin
            </h1>
        </div>
        <div>
            <Link href= '/'
            className="px-5 py-3 text-md bg-gray-200 rounded-lg">
                Sign Up

            </Link>
        </div>
    </header>
}

export default Header