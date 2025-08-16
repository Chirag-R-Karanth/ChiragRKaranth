"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function ContactSection() {
    return (
        <div className="flex justify-center space-x-6 mt-10">
        {/* LinkedIn */}
        <a
        href="https://www.linkedin.com/in/chirag-r-karanth-563515314/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition shadow-lg"
        >
        <Linkedin size={28} />
        </a>

        {/* GitHub */}
        <a
        href="https://github.com/Chirag-R-Karanth"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-gray-800 rounded-full text-white hover:bg-gray-900 transition shadow-lg"
        >
        <Github size={28} />
        </a>

        {/* Email */}
        <a
        href="mailto:chiragrkaranth@gmail.com"
        className="p-4 bg-green-600 rounded-full text-white hover:bg-green-700 transition shadow-lg"
        >
        <Mail size={28} />
        </a>

        {/* Instagram */}
        <a
        href="https://www.instagram.com/chirag_r_karanth/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition shadow-lg"
        >
        <Instagram size={28} />
        </a>
        </div>
    );
}
