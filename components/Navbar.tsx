import Image from "next/image";
import { roboto_cond } from "@/app/fonts";

const Navbar = () => {
    return (
        <>

            <div className="fixed bg-black w-full flex justify-between items-center shadow-sm shadow-grey">
                <Image src="/images/logo-white.svg" alt="logo" width={75} height={56} className="sm:ml-5" />
                <div className="sm:hidden w-5 h-5 mr-5" >
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                </div>
                <div className={`hidden sm:flex gap-14 mr-10 text-xl ${roboto_cond.className}`}>
                    <a>About Me</a>
                    <a>Skills</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </div>
            </div>


        </>
    );
}

export default Navbar