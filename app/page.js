"use client";

import Image from "next/image";
import { useChat } from "ai/react";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaPhone, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function Home() {
  const { isLoading, messages, input, handleInputChange, handleSubmit } = useChat();

  const noMessages = !messages || messages.length === 0;

  console.log(messages);

  // Smooth scroll to the contact section
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1gTXzhT9aWAJWBtSOgh8GzxqxIb1D7QDD/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaFilePdf className="text-xl" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <span>Contact</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Kampalli</span>
            <Image
              src="/1.jpeg"
              alt="Kampalli Icon"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Spacer Below Navbar */}
      <div className="h-20 bg-black"></div>

      {/* About Sohith Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Content on the Left */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-white">About Sohith Kampalli</h2>
              <p className="text-gray-300 text-lg mb-4">
                Full-Stack & Cloud Engineer specializing in scalable web and cloud applications with expertise in AWS, GCP, and Kubernetes (KCNA Certified). Skilled in building and deploying high-performance APIs, containerized microservices (Docker, Kubernetes), and cloud-native architectures.
              </p>
              <p className="text-gray-300 text-lg">
                Experienced in backend optimization, CI/CD automation, and full-stack development using Next.js, Node.js, and Prisma.
              </p>
            </div>

            {/* Image on the Right */}
            <div className="w-full md:w-1/2">
              <Image
                src="/2.jpeg" // Replace with your image path
                alt="Sohith Kampalli"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sohith Kampalli’s Personalized AI Portfolio Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          layout="fill"
          src="/1.jpeg"
          alt="Kampalli Banner"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="absolute px-4 w-full h-screen flex flex-col gap-5 items-center bottom-5 z-20">
          <h1 className="text-4xl font-Kanit md:text-5xl font-bold text-white mt-10">
            Sohith Kampalli&rsquo;s Personalized AI Portfolio
          </h1>

          <section className="w-full flex-1 flex flex-col overflow-y-scroll">
            {noMessages ? (
              <p className="text-center text-xl text-gray-300">Ask me Anything</p>
            ) : (
              <>
                {messages.map((message, index) => {
                  return (
                    <div
                      className={`rounded-3xl ${
                        message.role === "user"
                          ? "rounded-br-none bg-blue-500 ml-auto"
                          : "rounded-bl-none bg-orange-700"
                      } m-2 p-2 px-4 w-[70%] md:w-[80%] mt-4 text-gray-200`}
                      key={`message-${index}`}
                    >
                      <b>{message.role === "user" ? "User:" : "Kampalli:"}</b>{" "}
                      {message.content}
                    </div>
                  );
                })}

                {isLoading && (
                  <span className="ml-auto text-gray-300">Thinking... 🤔</span>
                )}
              </>
            )}
          </section>

          <form
            className="w-full flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <input
              onChange={handleInputChange}
              value={input}
              type="text"
              placeholder="What's your hometown?"
              className="py-3 px-5 flex-1 rounded text-black text-2xl border-2 border-gray-50 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded text-xl px-5 cursor-pointer focus:outline-none disabled:bg-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Section Above Contact Me */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Artistic Image Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 */}
            <div className="relative w-full h-64 transform transition-transform duration-500 hover:scale-105 hover:rotate-2">
              <Image
                src="/4.jpeg" // Replace with your image path
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Image 2 */}
            <div className="relative w-full h-96 transform transition-transform duration-500 hover:scale-105 hover:-rotate-2">
              <Image
                src="/6.jpeg" // Replace with your image path
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Image 3 */}
            <div className="relative w-full h-96 transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
              <Image
                src="/image3.jpg" // Replace with your image path
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Image 4 */}
            <div className="relative w-full h-64 transform transition-transform duration-500 hover:scale-105 hover:-rotate-3">
              <Image
                src="/image4.jpg" // Replace with your image path
                alt="Image 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Below Contact Me */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Dynamic Image Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 5 */}
            <div className="relative w-full h-96 transform transition-transform duration-500 hover:scale-105 hover:rotate-2">
              <Image
                src="/image5.jpg" // Replace with your image path
                alt="Image 5"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Image 6 */}
            <div className="relative w-full h-64 transform transition-transform duration-500 hover:scale-105 hover:-rotate-2">
              <Image
                src="/image6.jpg" // Replace with your image path
                alt="Image 6"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Image 7 */}
            <div className="relative w-full h-64 transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
              <Image
                src="/image7.jpg" // Replace with your image path
                alt="Image 7"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Image 8 */}
            <div className="relative w-full h-96 transform transition-transform duration-500 hover:scale-105 hover:-rotate-3">
              <Image
                src="/image8.jpg" // Replace with your image path
                alt="Image 8"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-gray-700 to-blue-800 text-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image on the Left */}
            <div className="w-full md:w-1/2">
              <Image
                src="/5.jpeg" // Replace with your image path
                alt="Contact Me"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Content on the Right */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
              <div className="flex justify-start gap-6 mb-8">
                <a
                  href="https://github.com/sohithk2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="text-4xl" />
                </a>
                <a
                  href="https://linkedin.com/in/sohithkampalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin className="text-4xl" />
                </a>
                <a
                  href="mailto:sohithkampalli9@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaEnvelope className="text-4xl" />
                </a>
                <a
                  href="tel:+19409771505"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaPhone className="text-4xl" />
                </a>
                <a
                  href="https://twitter.com/sohithkampalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="text-4xl" />
                </a>
                <a
                  href="https://instagram.com/sohithkampalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaInstagram className="text-4xl" />
                </a>
              </div>
              <p className="text-gray-300 text-lg">
                Feel free to reach out to me via email, phone, or social media. I’m always open to discussing new projects, creative ideas, or opportunities to be part of your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-4">
            &copy; {new Date().getFullYear()} Sohith Kampalli. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/sohithk2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/sohithkampalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="mailto:sohithkampalli9@gmail.com"
              className="hover:text-blue-500 transition-colors"
            >
              <FaEnvelope className="text-3xl" />
            </a>
            <a
              href="tel:+19409771505"
              className="hover:text-blue-500 transition-colors"
            >
              <FaPhone className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/sohithkampalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://instagram.com/sohithkampalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}