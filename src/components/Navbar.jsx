import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center items-center gap-6">
        {/* Nav Links */}
        <ul className="flex flex-wrap gap-6 text-black font-semibold text-sm md:text-base items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/committee">Committee</a>
          </li>
          <li>
            <a href="/faculty">Faculty</a>
          </li>
          <li>
            <a href="/program">Program</a>
          </li>
          <li>
            <a href="/workshop">Workshops</a>
          </li>
          <li>
            <a href="/abstract">Abstract</a>
          </li>
          <li>
            <a href="/venue">Venue</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Register Now Button */}
        <a
          href="/registration"
          className="bg-black text-white text-sm md:text-base font-semibold py-2 px-6 rounded-full hover:bg-gray-900 transition"
        >
          Register Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
