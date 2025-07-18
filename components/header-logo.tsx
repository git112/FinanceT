import Link from "next/link";
 import Image from "next/image";

 import React from 'react'
 
 export const HeaderLogo = () => {
   return (
     <Link href='/'>
        <div className="items-center hidden lg:flex">
          <Image src={'/logo.svg'} alt="logo" height={28} width={28}></Image>
          <p className="font-semibold text-white text-2xl ml-2.5">
            Finance
          </p>
           
        </div>
     </Link>
   );
 };
 
