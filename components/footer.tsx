import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="Smart Gems Academy" width={40} height={40} className="h-10 w-auto" />
              <span className="font-bold text-lg">Smart Gems Academy</span>
            </div>
            <p className="text-blue-200 mb-4">Nurturing Excellence in Education</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-blue-200 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-blue-200 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics" className="text-blue-200 hover:text-white transition-colors">
                  Primary School
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-blue-200 hover:text-white transition-colors">
                  Junior Secondary
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link href="/admissions" className="text-blue-200 hover:text-white transition-colors">
                  Fee Structure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-200 mr-2 mt-0.5" />
                <span className="text-blue-200">Head Office, Federal Capital Territory, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-200 mr-2" />
                <span className="text-blue-200">09079621426</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-200 mr-2" />
                <span className="text-blue-200">sga@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-200 mr-2" />
                <span className="text-blue-200">communication@smartgemacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Smart Gems Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
