"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MapPin, Phone } from "lucide-react"

export default function AboutPage() {
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
              <span className="text-white/90 font-medium">Our Story & Contact Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us & Contact</h1>
            <p className="text-xl mb-4 text-blue-100">Learn more about Smart Gems Academy and get in touch with us</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Smart Gems Academy was founded with a vision to provide world-class education in Nigeria. Located in the
                Federal Capital Territory, our institution has grown to become a beacon of academic excellence and
                character development.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to nurture well-rounded individuals who are academically sound, morally upright, and
                prepared to make positive contributions to society. We achieve this through our comprehensive
                curriculum, state-of-the-art facilities, and dedicated teaching staff.
              </p>
              <p className="text-gray-700">
                At Smart Gems Academy, we believe that every child is unique and has the potential to excel. Our
                personalized approach to education ensures that each student receives the attention and guidance they
                need to thrive.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/2.jpg?height=800&width=600"
                alt="Smart Gems Academy Campus"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Core Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These principles guide everything we do at Smart Gems Academy
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
                title: "Excellence",
                description: "We strive for excellence in all aspects of education and character development.",
              },
              {
                title: "Integrity",
                description: "We uphold the highest standards of honesty, ethics, and moral principles.",
              },
              {
                title: "Innovation",
                description: "We embrace creative thinking and innovative approaches to education.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold mb-2 text-blue-900">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Contact Us</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us with any questions or inquiries.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Address</h3>
                  <p className="text-gray-700">Head Office, Federal Capital Territory, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Phone</h3>
                  <p className="text-gray-700">09079621426</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Email</h3>
                  <p className="text-gray-700">sga@gmail.com</p>
                  <p className="text-gray-700">communication@sga.com</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Location</h3>
                <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252166.91434994515!2d7.249626071875003!3d9.006039999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1715771770000!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold text-blue-900 mb-6">Visiting Hours</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">What are the school hours?</h4>
                    <p className="text-gray-700">Our school day runs from 8:00 AM to 3:30 PM, Monday through Friday.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Do you offer transportation services?</h4>
                    <p className="text-gray-700">
                      Yes, we provide transportation services for students within designated routes in Abuja.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">What is the admission process?</h4>
                    <p className="text-gray-700">
                      The admission process includes an application, entrance assessment, and an interview. Visit our
                      Admissions page for details.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
