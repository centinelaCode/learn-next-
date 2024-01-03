import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const navsItems = [
   { path: '/about', text: 'About' },
   { path: '/pricing', text: 'Pricing' },
   { path: '/contact', text: 'Contact' },
]

export const Navbar = async() => {

   return (
      <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
         <Link href={'/'} className="flex items-center">
            <HomeIcon className="mr-2" />
            <span>Home</span>
         </Link>

         <div className="flex flex-1"></div>

         {/* Creacion menu de forma dinamica */}
         {
            navsItems.map(navItem => (
               <Link key={ navItem.path } className="mx-2" href={navItem.path}>{ navItem.text }</Link>
            ))
         }

      </nav>
   )
}
