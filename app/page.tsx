"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white rounded-full opacity-10"></div>
          <div className="hidden md:block absolute top-20 left-20 w-40 h-40 border-2 border-white/10 rounded-lg transform rotate-12"></div>
          <div className="hidden md:block absolute bottom-20 right-20 w-40 h-40 border-2 border-white/10 rounded-lg transform -rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-white/90 font-medium">Nurturing Tomorrow's Leaders</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Welcome to Smart Gems Academy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Providing world-class education in the heart of Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-blue-900 text-white hover:bg-white/10">
                <Link href="/admissions">Admissions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">About Our Academy</h2>
              <p className="text-gray-700 mb-6">
                Smart Gems Academy is a premier educational institution located in the Federal Capital Territory,
                Nigeria. We are committed to providing a holistic education that nurtures academic excellence, character
                development, and creative thinking.
              </p>
              <p className="text-gray-700 mb-8">
                Our state-of-the-art facilities and dedicated faculty ensure that every student receives personalized
                attention and the opportunity to excel in their chosen path.
              </p>
              <Button asChild>
                <Link href="/about" className="flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/1.jpg"
                alt="Students at Smart Gems Academy"
                fill
                className="object-cover w-[600px] h-[800px]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Programs</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Smart Gems Academy offers comprehensive educational programs designed to nurture the intellectual,
              physical, and emotional development of our students.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Primary Education",
                description:
                  "A strong foundation for lifelong learning with a balanced curriculum for students from Class 1 to Class 6.",
                icon: <BookOpen className="h-10 w-10 text-blue-900" />,
              },
              {
                title: "Junior Secondary",
                description:
                  "Comprehensive education for JSS1 to JSS3 students, preparing them for higher academic challenges.",
                icon: <GraduationCap className="h-10 w-10 text-blue-900" />,
              },
              {
                title: "Extracurricular Activities",
                description:
                  "A wide range of activities to develop talents, teamwork, and leadership skills outside the classroom.",
                icon: <Users className="h-10 w-10 text-blue-900" />,
              },
            ].map((program, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-blue-100 rounded-full">{program.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-blue-900">{program.title}</h3>
                    <p className="text-gray-700">{program.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fee Structure Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Fee Structure
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-700 mb-8">
              Smart Gems Academy offers comprehensive fee packages that cover tuition, feeding, accommodation, uniforms,
              medicals, textbooks, and more.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
                <Link href="/documents/fee-structure.pdf" target="_blank">
                  Download Fee Structure
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Academic Community
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl mb-8">
              Discover the Smart Gems difference and give your child the education they deserve.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/about">Contact Us Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
