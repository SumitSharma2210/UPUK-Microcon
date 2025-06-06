import React from "react";

const Contact = () => {
  return (
    <div className="bg-white py-12 px-4 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Contact Us
      </h1>

      <div className="space-y-6 text-lg">
        {/* Email */}
        <div>
          <h2 className="text-xl font-semibold mb-1">Email</h2>
          <a
            href="mailto:microcon2026@gmail.com"
            className="text-blue-700 underline"
          >
            microcon2026@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div>
          <h2 className="text-xl font-semibold mb-1">Phone</h2>
          <p>+91-XXXXXXXXXX (Conference Helpline)</p>
        </div>

        {/* Venue */}
        <div>
          <h2 className="text-xl font-semibold mb-1">Venue</h2>
          <p>
            Department of Microbiology, SGPGIMS <br />
            Raebareli Road, Lucknow – 226014 <br />
            Uttar Pradesh, India
          </p>
        </div>
      </div>

      <div className="mt-10 text-sm text-gray-500 text-center">
        For any queries or assistance, feel free to reach out to us.
      </div>
    </div>
  );
};

export default Contact;
