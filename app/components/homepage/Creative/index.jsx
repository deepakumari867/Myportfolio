"use client";

import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/image/ideate judge backdrop.jpg",
    title: "Google Ideate 3.0",
  },
  {
    id: 2,
    image: "/image/poster_release copy.jpg",
    title: "Poster Release",
  },
  {
    id: 3,
    image: "/image/Appreciate.jpg",
    title: "I-Appreciate",
  },
  {
    id: 4,
    image: "/image/Hospital.jpeg",
    title: "Open now Post",
  },
  {
    id: 5,
    image: "/image/Hospital 2.jpeg",
    title: "Diabetes",
  },
  {
    id: 6,
    image: "/image/Kids.jpeg",
    title: "School Open Post",
  },
];

function Creative() {
const [selectedImage, setSelectedImage] = React.useState(null);
  return (
    <div className="min-h-screen bg-[#050816] px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My Creative Designs
        </h1>

        <p className="text-gray-400 mt-4">
          Designs that carry stories, colors, and late-night creativity
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-500"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={700}
                className="w-full h-[230px] object-cover hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-white text-xl font-semibold">
                {project.title}
              </h2>

              <button
                onClick={() => setSelectedImage(project)}
                className="mt-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full hover:scale-105 transition-all duration-300"
              >
                View 
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">

          <div className="relative bg-[#0b1120] rounded-2xl max-w-5xl w-full p-4 border border-[#243b75]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-500 p-2 rounded-full text-white hover:scale-110 transition-all"
            >
              <X size={22} />
            </button>

            {/* Large Image */}
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1600}
              height={900}
              className="w-full h-auto rounded-xl object-cover"
            />

            {/* Title */}
            <h2 className="text-white text-2xl font-bold mt-5 text-center">
              {selectedImage.title}
            </h2>

          </div>
        </div>
      )}
    </div>
  );
}

export default Creative;