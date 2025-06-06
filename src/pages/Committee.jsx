import React from "react";

const Committee = () => {
  return (
    <div className="bg-white py-12 px-4 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Committee Information
      </h1>

      {/* Patron */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Patron</h2>
        <p>Prof. R.K. Singh, Director, SGPGIMS (demo name)</p>
      </div>

      {/* Organizing Chairperson */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Organizing Chairperson
        </h2>
        <p>
          Prof. Tuhina Banerjee, Head, Dept. of Microbiology, SGPGIMS (demo
          name)
        </p>
      </div>

      {/* Organizing Committee */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Organizing Committee
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Dr. K.K. Singh (demo name)</li>
          <li>Dr. Nidhi Yadav (demo name)</li>
        </ul>
      </div>

      {/* Scientific Committee */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Scientific Committee
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Dr. Poonam Sinha (demo name)</li>
          <li>Dr. Deepti Rawat (demo name)</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="mt-10 text-sm text-gray-500">
        For more information, email us at:{" "}
        <a
          href="mailto:microcon2026@gmail.com"
          className="text-blue-700 underline"
        >
          microcon2026@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Committee;
