




// "use client";

// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import { useRouter, usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import MorphingText from "./eldoraui/morphingtext";

// const Liquid = () => {
//   const links = [
//     { name: "home", url: "/" },
//     { name: "about", url: "/about" },
//     { name: "events", url: "/events" },
//     { name: "contact", url: "/contact" },
//   ];

//   const router = useRouter();
//   const pathname = usePathname();
//   const [currentLink, setCurrentLink] = useState(0);

//   useEffect(() => {
//     let index = links.findIndex((link) => {
//       if (link.url === "/events") {
//         // Match "/events" and any subpath like "/events/:id"
//         return pathname.startsWith("/events");
//       }
//       return link.url === pathname;
//     });

//     if (index === -1) {
//       index = 0; // Default to "home" if no match
//     }

//     setCurrentLink(index);
//   }, [pathname, links]);

//   return (
//     <div className="w-full flex flex-row  sticky top-1 z-50 bg-black">
//       <div className="hidden sm:block">
//         <MorphingText texts={["Event", "Aura"]} />
//       </div>
//       <div className="relative w-full h-full flex justify-center items-center">
//         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute">
//           <defs>
//             <filter id="goo">
//               <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
//               <feColorMatrix
//                 in="blur"
//                 mode="matrix"
//                 values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
//                 result="goo"
//               />
//               <feComposite in="SourceGraphic" in2="goo" operator="atop" />
//             </filter>
//           </defs>
//         </svg>
//         <motion.ul
//           style={{
//             filter: "url(#goo)",
//           }}
//           layout
//           className="h-14 flex"
//         >
//           {links.map((link, index) => (
//             <motion.li
//               key={index}
//               onClick={() => {
//                 router.push(link.url);
//               }}
//               className={cn(
//                 "bg-black text-white px-7 h-full items-center mx-0 transition-all duration-500 cursor-pointer justify-center flex capitalize font-bold",
//                 currentLink === index && "bg-blue-500 mx-6"
//               )}
//             >
//               {link.name}
//             </motion.li>
//           ))}
//         </motion.ul>
//       </div>
//     </div>
//   );
// };

// export default Liquid;


"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import MorphingText from "./eldoraui/morphingtext"

const Liquid = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "events", url: "/events" },
    {name:"hackathons", url:"/hackathons"},
    { name: "contact", url: "/contact" },
  ]

  const router = useRouter()
  const pathname = usePathname()
  const [currentLink, setCurrentLink] = useState(0)

  useEffect(() => {
    let index = links.findIndex((link) => {
      if (link.url === "/events") {
        // Match "/events" and any subpath like "/events/:id"
        return pathname.startsWith("/events")
      }
      return link.url === pathname
    })

    if (index === -1) {
      index = 0 // Default to "home" if no match
    }

    setCurrentLink(index)
  }, [pathname])

  return (
    <div className="w-full flex flex-row sticky top-1 z-50 ">
      <div className="hidden sm:block">
        <MorphingText texts={["Event", "Aura"]} />
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        <motion.ul
          style={{
            filter: "url(#goo)",
          }}
          layout
          className="h-14 flex"
        >
          {links.map((link, index) => (
            <motion.li
              key={index}
              onClick={() => {
                router.push(link.url)
              }}
              className={cn(
                "bg-gray-800 text-gray-300 px-7 h-full items-center mx-0 transition-all duration-500 cursor-pointer justify-center flex capitalize font-bold hover:text-white",
                currentLink === index && "bg-indigo-600 text-white mx-6",
              )}
            >
              {link.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export default Liquid

