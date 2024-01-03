

const temporalAsync = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(true)
      }, 2000);
   })
}


export const Navbar = async() => {
   console.log('Este console.log solo se ve en la consola, no en el navagador.')

   await temporalAsync()

   return (
      <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
         <span>Home</span>

         <div className="flex flex-1">

         </div>

         <a className="mx-2" href="/about">About</a>
         <a className="mx-2" href="/pricing">Pricing</a>
         <a className="mx-2" href="/contact">Contact</a>
      </nav>
   )
}
