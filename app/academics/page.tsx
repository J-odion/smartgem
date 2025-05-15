"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Calendar, Clock, Users } from "lucide-react"

export default function AcademicsPage() {
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
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
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
              <span className="text-white/90 font-medium">Excellence in Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
            <p className="text-xl mb-4 text-blue-100">Discover our comprehensive academic programs and curriculum</p>
          </motion.div>
        </div>
      </section>

      {/* Academic Philosophy */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Our Academic Philosophy</h2>
              <p className="text-gray-700 mb-6">
                At Smart Gems Academy, we believe in providing a holistic education that nurtures the intellectual,
                physical, emotional, and social development of each student. Our curriculum is designed to challenge
                students academically while fostering creativity, critical thinking, and problem-solving skills.
              </p>
              <p className="text-gray-700">
                We maintain small class sizes to ensure personalized attention for each student, allowing our teachers
                to identify and address individual learning needs. Our approach combines traditional teaching methods
                with innovative learning techniques to create an engaging and effective educational experience.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/3.jpg?height=800&width=600"
                alt="Students in classroom at Smart Gems Academy"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Curriculum</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our comprehensive curriculum designed to provide a well-rounded education
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <Tabs defaultValue="primary" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="primary">Primary School</TabsTrigger>
                <TabsTrigger value="junior">Junior Secondary</TabsTrigger>
              </TabsList>
              <TabsContent value="primary" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Primary School Curriculum (Classes 1-6)</h3>
                    <p className="text-gray-700 mb-6">
                      Our primary school curriculum provides a strong foundation in core subjects while encouraging
                      exploration and discovery through hands-on learning experiences.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Core Subjects</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>English Language</li>
                          <li>Mathematics</li>
                          <li>Science</li>
                          <li>Social Studies</li>
                          <li>Computer Studies</li>
                          <li>Religious Studies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Complementary Subjects</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Creative Arts</li>
                          <li>Physical Education</li>
                          <li>Music</li>
                          <li>French</li>
                          <li>Civic Education</li>
                          <li>Agricultural Science</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="junior" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Junior Secondary School Curriculum (JSS 1-3)
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Our junior secondary curriculum builds on the primary foundation, introducing more specialized
                      subjects and preparing students for higher academic challenges.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Core Subjects</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>English Language</li>
                          <li>Mathematics</li>
                          <li>Basic Science</li>
                          <li>Basic Technology</li>
                          <li>Social Studies</li>
                          <li>Computer Studies</li>
                          <li>Business Studies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Complementary Subjects</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>French</li>
                          <li>Creative Arts</li>
                          <li>Physical & Health Education</li>
                          <li>Religious Studies</li>
                          <li>Agricultural Science</li>
                          <li>Home Economics</li>
                          <li>Civic Education</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Academic Features</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">What makes our academic program stand out</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Users className="h-10 w-10 text-blue-900" />,
                title: "Small Class Sizes",
                description: "Maximum of 20 students per class for personalized attention",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-blue-900" />,
                title: "Qualified Teachers",
                description: "Experienced educators with advanced degrees in their fields",
              },
              {
                icon: <Clock className="h-10 w-10 text-blue-900" />,
                title: "Extended Learning",
                description: "After-school enrichment programs to enhance learning",
              },
              {
                icon: <Calendar className="h-10 w-10 text-blue-900" />,
                title: "Regular Assessment",
                description: "Continuous evaluation to track progress and identify areas for improvement",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-blue-100 rounded-full">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-blue-900">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Academic Calendar</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Key dates for the current academic year</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">First Term</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Term Begins</span>
                        <span className="text-gray-700">September 11, 2025</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Mid-Term Break</span>
                        <span className="text-gray-700">October 23-27, 2025</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Term Ends</span>
                        <span className="text-gray-700">December 13, 2025</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Second Term</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Term Begins</span>
                        <span className="text-gray-700">January 8, 2026</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Mid-Term Break</span>
                        <span className="text-gray-700">February 19-23, 2026</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Term Ends</span>
                        <span className="text-gray-700">April 3, 2026</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Third Term</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Term Begins</span>
                        <span className="text-gray-700">April 27, 2026</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Mid-Term Break</span>
                        <span className="text-gray-700">June 4-8, 2026</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800">Term Ends</span>
                        <span className="text-gray-700">July 24, 2026</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
