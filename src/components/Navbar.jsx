import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {[
          { label: "Home", link: "/" },
          { label: "Committee", link: "/committee" },
          { label: "Faculty", link: "/faculty" },
          { label: "Program", link: "/program" },
          { label: "Workshops", link: "/workshop" },
          { label: "Abstract", link: "/abstract" },
          { label: "Registration", link: "/registration" },
          { label: "Venue", link: "/venue" },
          { label: "Contact", link: "/contact" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="text-white text-sm sm:text-base hover:underline hover:text-yellow-200 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
