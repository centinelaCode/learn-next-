
import type { Metadata } from "next"

export const metadata: Metadata = {
   title: 'Pricing Page',
   description: 'Pricing Description',
   keywords: ['Pricing Page', 'Raul', 'info'],
 }

export default function PricingPage() {
   return (
      <>
         <span className="text-7xl">Pricing Page</span>
      </>
   )
}
