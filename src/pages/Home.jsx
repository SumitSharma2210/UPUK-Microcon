import React, { useEffect, useState } from "react";
import sgpgiLogo from "../assets/sgpgi.png";
import iammLogo from "../assets/iamm.png";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
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
      {/* Header */}
      <section className="w-full bg-gradient-to-r from-blue-100 to-white py-10 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img
              src={sgpgiLogo}
              alt="SGPGI Logo"
              className="w-48 sm:w-60 h-auto object-contain"
            />
          </div>

          {/* Title + Subtitle */}
          <div className="text-center w-full md:w-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight">
              UPUK MICROCON 2026
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 mt-2">
              21st Annual Conference of UP-UK Chapter of Indian Association of{" "}
              <br />
              Medical Microbiologists
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img
              src={iammLogo}
              alt="IAMM Logo"
              className="w-28 sm:w-36 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <Navbar />

      {/* Hero Section with Black Buttons and No Shadows */}
      <section style={{ position: "relative", width: "100%", height: "90vh" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/videos/microscope.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            textAlign: "center",
            paddingTop: "20vh",
            textShadow: "0 0 6px rgba(0,0,0,0.8)",
          }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Welcome to UPUK MICROCON 2026
          </h2>
          <p className="text-3xl md:text-4xl mb-8">
            Hosted by SGPGI, Lucknow | 6th – 7th February 2026
          </p>
          <div className="text-4xl font-semibold bg-white text-blue-700 px-10 py-5 rounded-full inline-block mb-10">
            ⏳ {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
            {timeLeft.seconds}s
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-8">
            <a
              href="/registration"
              className="bg-black text-white text-2xl font-bold py-4 px-10 rounded-full hover:bg-gray-900 transition"
            >
              Register Now
            </a>
            <a
              href="/abstract"
              className="bg-black text-white text-2xl font-bold py-4 px-10 rounded-full hover:bg-gray-900 transition"
            >
              Submit Abstract
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 px-6 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About the Conference
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SGPGI's Department of Microbiology is a premier institution
              dedicated to excellence in diagnostics, research, and education in
              the field of medical microbiology. The upcoming UPUK MICROCON 2026
              will provide a platform for experts and learners to share
              knowledge, innovations, and clinical breakthroughs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The institute is located on 649.72 acres (2.6293 km2) residential
              campus on Raebareli Road. The institute offers degrees recognised
              by the National Medical Commission. It provides tertiary-level
              medical care, teaching, training, and research for specialties.
              Degrees at the DM, MCh, MD, and Ph.D. levels are offered, along
              with postdoctoral fellowships and postdoctoral certificate courses
              in various disciplines. Offers training programs for senior
              residents. The College of Medical Technology offers B.Sc. courses
              in nursing and BSc/MSc courses in paramedical technology in allied
              sciences. The institute is an autonomous institution. The
              institute functions as a state college is a member of the
              Association of Indian Universities, and is recognised by the
              College Grants Commission.
            </p>
            <a
              href="/venue"
              className="inline-block border border-black text-black font-semibold py-2 px-6 rounded-full hover:bg-black hover:text-white transition"
            >
              Explore
            </a>
          </div>

          {/* Right: Image Stack Layout */}
          <div className="relative w-full flex justify-center">
            {/* Main image */}
            <img
              src="/images/about/main.jpg"
              alt="Main Session"
              className="w-[400px] md:w-[480px] rounded-2xl"
            />
            {/* Top left small image */}
            <img
              src="/images/about/top.jpg"
              alt="Top Preview"
              className="absolute top-0 left-0 w-[180px] md:w-[200px] rounded-xl shadow-lg -translate-x-1/3 -translate-y-1/3"
              data-aos="fade-right"
            />
            {/* Bottom right small image */}
            <img
              src="/images/about/bottom.jpg"
              alt="Bottom Preview"
              className="absolute bottom-0 right-0 w-[180px] md:w-[200px] rounded-xl shadow-lg translate-x-1/3 translate-y-1/3"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>

      {/* Welcome section */}
      <section
        className="py-20 px-10 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome To Microcon 2026
            </h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Join us for the premier event in clinical microbiology and
              infectious diseases. Don't miss this opportunity to connect with
              leading experts and explore the latest advancements in the field.
            </p>
            <a
              href="/registration"
              className="inline-block border border-black text-black font-semibold py-2 px-6 rounded-full hover:bg-black hover:text-white transition"
            >
              Register Now
            </a>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left">
            <img
              src="/images/welcome/auditorium.jpg"
              alt="Conference"
              className="w-full h-[500px] object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* Conference Hall Section */}
      <section
        className="py-20 px-10 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-4">Conference Highlights</h2>
            <p className="text-lg mb-4">
              Expand your skill set with our hands-on workshops, attend keynote
              addresses, and develop your network with our highly recommended
              networking sessions.
            </p>
            <p className="text-lg mb-6">
              Register early to secure your spot in these highly sought after
              sessions.
            </p>
            <a
              href="/program"
              className="bg-black text-white text-lg font-medium py-2 px-6 rounded-full hover:bg-gray-800 transition"
            >
              Explore
            </a>
          </div>

          {/* Right Image Cards */}
          <div
            className="relative flex flex-col sm:flex-row gap-6"
            data-aos="fade-left"
          >
            {[
              {
                title: "01. Keynote Speakers",
                src: "/images/highlights/keynote.jpg",
                offset: "mt-0",
              },
              {
                title: "02. Workshops",
                src: "/images/highlights/workshops.jpg",
                offset: "mt-12",
              },
              {
                title: "03. Networking",
                src: "/images/highlights/networking.jpg",
                offset: "mt-24",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl cursor-pointer transform transition duration-300 hover:-translate-y-2 ${item.offset}`}
              >
                <div className="relative w-[400px]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-[520px] object-cover rounded-2xl"
                  />
                  <p className="absolute bottom-2 left-2 text-white text-sm font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places to Visit - Slideshow */}
      <section
        className="bg-gray-100 py-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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
            {[
              "lucknow1.jpg",
              "lucknow3.jpg",
              "lucknow4.jpg",
              "lucknow5.jpg",
              "lucknow6.jpg",
            ].map((img, i) => (
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

      {/* Registration fees */}
      <section
        className="py-20 px-6 w-full bg-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Microcon 2026 Registration Fees
          </h2>

          <div className="overflow-auto rounded-2xl shadow-xl max-w-full mx-auto">
            <table className="w-full text-center">
              <thead className="bg-blue-600 text-white text-base">
                <tr>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">1 Jan - 15 Jan 2026</th>
                  <th className="py-4 px-4">16 Jan - 29 Jan 2026</th>
                  <th className="py-4 px-4">
                    Spot Registration (2nd February 2026)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-50 text-gray-900 text-base">
                <tr>
                  <td className="py-4 bg-blue-600 text-white font-medium">
                    IAMM Member
                  </td>
                  <td>₹13,000</td>
                  <td>₹15,000</td>
                  <td>₹18,000</td>
                </tr>
                <tr>
                  <td className="py-4 bg-blue-600 text-white font-medium">
                    Non-IAMM Member
                  </td>
                  <td>₹14,000</td>
                  <td>₹16,000</td>
                  <td>₹19,000</td>
                </tr>
                <tr>
                  <td className="py-4 bg-blue-600 text-white font-medium">
                    Post Graduate Students
                  </td>
                  <td>₹9,000</td>
                  <td>₹10,000</td>
                  <td>₹11,000</td>
                </tr>
                <tr>
                  <td className="py-4 bg-blue-600 text-white font-medium">
                    Foreign Delegates
                  </td>
                  <td>$200</td>
                  <td>$300</td>
                  <td>$325</td>
                </tr>
                <tr>
                  <td className="py-4 bg-blue-600 text-white font-medium">
                    Accompanying Person
                  </td>
                  <td>₹5,000</td>
                  <td>₹5,000</td>
                  <td>₹5,000</td>
                </tr>
                <tr>
                  <td className="py-4 bg-blue-600 text-white font-medium">
                    Pre-Conference Workshop (29.01.26)
                  </td>
                  <td>₹1,200</td>
                  <td>₹1,500</td>
                  <td className="italic text-gray-500">No Spot Registration</td>
                </tr>
                <tr>
                  <td className="py-4 bg-blue-600 text-white font-medium">
                    Pre-Conference CME (02.02.26)
                  </td>
                  <td>₹2,200</td>
                  <td>₹2,500</td>
                  <td>₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section
        className="py-20 px-6 bg-white w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/images/membership/cta.jpg"
              alt="Membership"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>

          {/* Right Text + Buttons */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Become a Member of UP-UK IAMM
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Join as a Life Member, Associate Member, or Annual Member to
              access academic benefits and stay updated with microbiology
              events.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/abstract#instructions"
                className="bg-black text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-900 transition"
              >
                How Do I Do It?
              </a>
              <a
                href="/abstract"
                className="border border-black text-black font-semibold py-2 px-6 rounded-full hover:bg-black hover:text-white transition"
              >
                Submit Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Buttons */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          {/* Left: Logo */}
          <div>
            <img
              src="/images/logo.png"
              alt="Microcon Logo"
              className="w-60 mb-6"
            />
          </div>

          {/* Center: Quick Links & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-800">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/committee" className="hover:underline">
                  Committee
                </a>
              </li>
              <li>
                <a href="/faculty" className="hover:underline">
                  Faculty
                </a>
              </li>
              <li>
                <a href="/program" className="hover:underline">
                  Program
                </a>
              </li>
              <li>
                <a href="/workshop" className="hover:underline">
                  Workshops
                </a>
              </li>
              <li>
                <a href="/abstract" className="hover:underline">
                  Abstract
                </a>
              </li>
              <li>
                <a href="/registration" className="hover:underline">
                  Registration
                </a>
              </li>
              <li>
                <a href="/venue" className="hover:underline">
                  Venue
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-2">CONTACT</h3>
            <p className="text-gray-800">info.microcon2026@gmail.com</p>
            <p className="mt-2 text-gray-800 leading-snug">
              Sanjay Gandhi Postgraduate Institute of Medical Sciences(SGPGI)
              <br />
              Lucknow
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-700">
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-200 p-6 rounded-xl w-full">
            <h3 className="text-xl font-bold mb-4">Contact us</h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name *"
                  className="w-1/2 p-2 rounded-md border border-gray-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-1/2 p-2 rounded-md border border-gray-300"
                  required
                />
              </div>
              <textarea
                placeholder="Message *"
                className="w-full p-2 rounded-md border border-gray-300"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-full hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
