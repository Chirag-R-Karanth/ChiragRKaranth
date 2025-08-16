"use client";

import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Head from 'next/head'


<Head>
<title>ChiragRKaranth</title>
</Head>
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
    <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
    <h1 className="text-2xl font-bold tracking-tight">Chirag R Karanth</h1>
    <nav className="space-x-6 text-lg">
    <a href="#about" className="hover:text-blue-400">About</a>
    <a href="#skills" className="hover:text-blue-400">Skills</a>
    <a href="#projects" className="hover:text-blue-400">Projects</a>
    <a href="#contact" className="hover:text-blue-400">Contact</a>
    </nav>
    </header>

    {/* Hero Section */}
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
    <motion.h2
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-extrabold mb-4"
    >
    Hi, I’m <span className="text-blue-400">Chirag</span> 👋
    </motion.h2>
    <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="text-xl text-gray-300 max-w-2xl"
    >
    Aspiring Full-Stack Developer | State-Level Basketball Player | Tech Enthusiast 🚀
    </motion.p>
    <div className="flex gap-4 mt-8">
    <Button className="bg-blue-500 hover:bg-blue-600 text-black rounded-full px-6 py-3">
    View Resume
    </Button>
    </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
    <h3 className="text-3xl font-bold mb-6 text-blue-400">About Me</h3>
    <p className="text-lg text-gray-300 leading-relaxed">
    I’m a curious learner passionate about web development, programming, electronics and cybersecurity. I love blending my technical skills with creativity to build meaningful solutions. Outside of tech, I am a state level basketball player, swimmer, sports enthusiast or fantasy&thriller book nerd.
    </p>
    </section>

    {/* Skills Section */}
    <section id="skills" className="py-20 px-6 bg-gray-800/40">
    <h3 className="text-3xl font-bold mb-10 text-blue-400 text-center">Skills</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Python', 'Electronics', 'Linux' , 'C' , 'C++'].map(skill => (
      <Card key={skill} className="bg-gray-900/60 shadow-lg">
      <CardContent className="p-6 text-center text-lg font-semibold text-white">
      {skill}
      </CardContent>
      </Card>
    ))}
    </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
    <h3 className="text-3xl font-bold mb-10 text-blue-400 text-center">Projects</h3>
    <div className="grid md:grid-cols-2 gap-8">
    <Card className="bg-gray-900/60">
    <CardContent className="p-6">
    <h4 className="text-xl font-semibold mb-2 text-white">My initial projects</h4>
    <p className="text-gray-400 mb-4">
    A sleek personal, initial showcasing my journey, skills, and projects.
    </p>
    <Button
    variant="outline"
    className="rounded-full"
    onClick={() => window.open("https://github.com/Chirag-R-Karanth/Initially", "_blank")}
    >
    View Project
    </Button>

    </CardContent>
    </Card>

    <Card className="bg-gray-900/60">
    <CardContent className="p-6">
    <h4 className="text-xl font-semibold mb-2 text-white">Data Structures and Algorithms</h4>
    <p className="text-gray-400 mb-4">
    DSA beginings


    </p>
    <Button
    variant="outline"
    className="rounded-full"
    onClick={() => window.open("https://github.com/Chirag-R-Karanth/DSA", "_blank")}
    >
    View Project
    </Button>

    </CardContent>
    </Card>
    </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-20 px-6 bg-gray-800/40 text-center">
    <h3 className="text-3xl font-bold mb-6 text-blue-400">Let’s Connect</h3>
    <p className="text-lg text-gray-300 mb-6">
    Have an opportunity, idea, or just want to chat? Reach out!
    </p>
    <ContactSection />
    </section>

    {/* Footer */}
    <footer className="text-center py-6 text-gray-500 text-sm">
    © {new Date().getFullYear()} Chirag Karanth | Built with ❤️
    </footer>
    </div>
  );
}
