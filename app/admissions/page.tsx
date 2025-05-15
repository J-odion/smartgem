"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Download } from "lucide-react"

export default function AdmissionsPage() {
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
              <span className="text-white/90 font-medium">Join Our Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl mb-4 text-blue-100">
              Join the Smart Gems Academy family and begin your journey to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Admissions Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Follow these steps to join Smart Gems Academy</p>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-4xl mx-auto"
          >
            {[
              {
                step: "Step 1",
                title: "Submit Application",
                description: "Complete and submit the application form with all required documents.",
              },
              {
                step: "Step 2",
                title: "Entrance Assessment",
                description: "Students will take an entrance assessment to determine their academic level.",
              },
              {
                step: "Step 3",
                title: "Interview",
                description: "Selected candidates and their parents will be invited for an interview.",
              },
              {
                step: "Step 4",
                title: "Admission Offer",
                description: "Successful candidates will receive an admission offer.",
              },
              {
                step: "Step 5",
                title: "Fee Payment",
                description: "Complete the payment of fees to secure your child's place.",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-900 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Fee Structure</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our comprehensive fee structure covers tuition, feeding, accommodation, uniforms, medicals, textbooks,
                and more.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Tabs defaultValue="primary" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="primary">Primary School</TabsTrigger>
                  <TabsTrigger value="junior">Junior Secondary</TabsTrigger>
                </TabsList>
                <TabsContent value="primary" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-blue-100">
                              <th className="border p-3 text-left text-blue-900">Class</th>
                              <th className="border p-3 text-left text-blue-900">First Term</th>
                              <th className="border p-3 text-left text-blue-900">Second Term</th>
                              <th className="border p-3 text-left text-blue-900">Third Term</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">Class 1</td>
                              <td className="border p-3">₦850,000</td>
                              <td className="border p-3">₦850,000</td>
                              <td className="border p-3">₦850,000</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">Class 2</td>
                              <td className="border p-3">₦875,000</td>
                              <td className="border p-3">₦875,000</td>
                              <td className="border p-3">₦875,000</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">Class 3</td>
                              <td className="border p-3">₦900,000</td>
                              <td className="border p-3">₦900,000</td>
                              <td className="border p-3">₦900,000</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">Class 4</td>
                              <td className="border p-3">₦950,000</td>
                              <td className="border p-3">₦950,000</td>
                              <td className="border p-3">₦950,000</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">Class 5</td>
                              <td className="border p-3">₦980,000</td>
                              <td className="border p-3">₦980,000</td>
                              <td className="border p-3">₦980,000</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">Class 6</td>
                              <td className="border p-3">₦1,000,000</td>
                              <td className="border p-3">₦1,000,000</td>
                              <td className="border p-3">₦1,000,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="junior" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-blue-100">
                              <th className="border p-3 text-left text-blue-900">Class</th>
                              <th className="border p-3 text-left text-blue-900">First Term</th>
                              <th className="border p-3 text-left text-blue-900">Second Term</th>
                              <th className="border p-3 text-left text-blue-900">Third Term</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">JSS 1</td>
                              <td className="border p-3">₦1,250,000</td>
                              <td className="border p-3">₦1,250,000</td>
                              <td className="border p-3">₦1,250,000</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">JSS 2</td>
                              <td className="border p-3">₦1,350,000</td>
                              <td className="border p-3">₦1,350,000</td>
                              <td className="border p-3">₦1,350,000</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">JSS 3</td>
                              <td className="border p-3">₦1,400,000</td>
                              <td className="border p-3">₦1,400,000</td>
                              <td className="border p-3">₦1,400,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-8 text-center">
                <p className="text-gray-700 mb-6">
                  <strong>Note:</strong> PTA fee of ₦150,000 is paid per session (during first term).
                </p>
                <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
                  <Link href="/documents/fee-structure.pdf" target="_blank" className="flex items-center gap-2">
                    <Download size={18} />
                    Download Complete Fee Structure
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What's Included in Our Fees</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our comprehensive fee structure ensures your child has everything they need
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              "Tuition",
              "Feeding",
              "Accommodation",
              "Uniforms",
              "Medical Care",
              "First Aid",
              "Textbooks",
              "Exercise Books",
              "Exhibitions",
              "Enrichment Classes",
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-800">{item}</span>
                </div>
              </motion.div>
            ))}
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
              Ready to Apply?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl mb-8">
              Take the first step towards providing your child with a world-class education.
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
