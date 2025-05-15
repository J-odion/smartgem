"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10 p-1 transition-all duration-300 group-hover:bg-white/20">
              <Image src="/images/logo.png" alt="Smart Gems Academy" fill className="object-contain p-1" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-lg transition-colors duration-300",
                  isScrolled ? "text-blue-900" : "text-white",
                )}
              >
                Smart Gems Academy
              </span>
              <span
                className={cn("text-xs transition-colors duration-300", isScrolled ? "text-blue-700" : "text-blue-100")}
              >
                Nurturing Excellence
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  pathname === item.href
                    ? isScrolled
                      ? "text-blue-900"
                      : "text-white"
                    : isScrolled
                      ? "text-gray-700"
                      : "text-white/80",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full",
                    pathname === item.href ? "w-full" : "w-0",
                  )}
                ></span>
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className={cn(
                "ml-4 transition-all duration-300",
                isScrolled
                  ? "bg-blue-800 hover:bg-blue-700 text-white"
                  : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/20",
              )}
            >
              <Link href="/about">Contact Us</Link>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open Menu">
                <Menu className={cn("h-6 w-6", isScrolled ? "text-blue-900" : "text-white")} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-blue-900 py-2 border-b border-gray-100",
                      pathname === item.href ? "text-blue-900 font-semibold" : "text-gray-700",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/about">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
