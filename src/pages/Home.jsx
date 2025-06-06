import React, { useEffect, useState } from "react";
import sgpgiLogo from "../assets/sgpgi.png";
import iammLogo from "../assets/iamm.png";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  // Countdown Timer Logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-02-06T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header: Logos + Title Box */}
      <section className="bg-white border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          {/* Left: SGPGI Logo */}
          <div className="flex-1 min-w-[80px] flex justify-start">
            <img
              src={sgpgiLogo}
              alt="SGPGI Logo"
              className="w-60 sm:w-65 h-auto object-contain"
            />
          </div>

          {/* Center: Title Box */}
          <div className="flex-2 min-w-[200px] text-center px-4">
            <div className="bg-yellow-300 rounded-full px-6 py-4 shadow-lg">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
                UPUK MICROCON 2026
              </h1>
              <p className="text-sm md:text-base text-gray-900 mt-1 leading-snug">
                21st Annual Conference of UP-UK Chapter of Indian Association of
                <br />
                Medical Microbiologists
              </p>
            </div>
          </div>

          {/* Right: IAMM Logo */}
          <div className="flex-1 min-w-[80px] flex justify-end">
            <img
              src={iammLogo}
              alt="IAMM Logo"
              className="w-36 sm:w-40 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Navbar Below Header */}
      <Navbar />

      {/* Hero Section with Countdown */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-16 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to UPUK MICROCON 2026
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Hosted by SGPGI, Lucknow | 6th – 7th February 2026
          </p>
          <div className="text-2xl font-semibold bg-white text-blue-700 px-6 py-3 rounded-full inline-block shadow-lg">
            ⏳ {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
            {timeLeft.seconds}s
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
          About SGPGI & Microbiology Department
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700">
          SGPGI (Sanjay Gandhi Postgraduate Institute of Medical Sciences) is a
          leading superspeciality institution accredited with NAAC A++. The
          Department of Microbiology offers advanced research and diagnostic
          services in clinical microbiology, antimicrobial resistance, and
          infectious diseases.
        </p>
      </section>

      {/* Welcome Message */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Welcome Message
          </h2>
          <p className="text-gray-700">
            We warmly welcome all esteemed delegates, researchers, and students
            to UPUK MICROCON 2026. This conference is an opportunity to connect,
            share knowledge, and contribute to the growing field of medical
            microbiology.
          </p>
        </div>
      </section>

      {/* Places to Visit - Slideshow */}
      <section className="bg-gray-100 py-10">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
            Photo Gallery
          </h2>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            className="shadow-md"
          >
            {["lucknow1.jpg", "lucknow2.jpg", "lucknow3.jpg"].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`/images/${img}`}
                  alt={`Lucknow view ${i + 1}`}
                  className="w-full h-[400px] sm:h-[450px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto bg-blue-600 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Become a Member of UP-UK IAMM
          </h2>
          <p className="mb-6">
            Join as a Life Member, Associate Member, or Annual Member to access
            academic benefits and stay updated with microbiology events.
          </p>
          <a
            href="/membership"
            className="inline-block bg-white text-blue-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Quick Navigation Buttons */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Register for Conference", link: "/registration" },
            { title: "Submit Abstract", link: "/abstract" },
            { title: "View Committee", link: "/committee" },
            { title: "Workshop Details", link: "/workshop" },
            { title: "Conference Program", link: "/program" },
            { title: "Contact Organizers", link: "/contact" },
          ].map((card, i) => (
            <a
              key={i}
              href={card.link}
              className="block bg-blue-600 text-white text-lg font-semibold text-center py-6 px-4 rounded-xl hover:bg-blue-700 transition shadow-md"
            >
              {card.title}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
