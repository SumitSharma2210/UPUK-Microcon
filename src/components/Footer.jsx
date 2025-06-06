import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 text-center text-sm mt-8">
      <p>© 2026 UPUK MICROCON. All rights reserved.</p>
      <p className="mt-1">
        This website was made by <strong>Sumit Sharma</strong>. Contact:{" "}
        <a
          href="mailto:sumitsharma@example.com"
          className="underline hover:text-yellow-300"
        >
          sumit.sharma.gkv@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
