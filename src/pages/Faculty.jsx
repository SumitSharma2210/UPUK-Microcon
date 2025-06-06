import React from "react";

const Faculty = () => {
  return (
    <div className="bg-white py-12 px-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Invited Faculty (Demo)
      </h1>

      <ul className="list-disc list-inside text-lg space-y-3">
        <li>
          Dr. Ankur Sinha{" "}
          <span className="text-sm text-gray-500">(Demo Name)</span>
        </li>
        <li>
          Dr. Neha Rastogi{" "}
          <span className="text-sm text-gray-500">(Demo Name)</span>
        </li>
        <li>
          Dr. Shalini Verma{" "}
          <span className="text-sm text-gray-500">(Demo Name)</span>
        </li>
        <li>
          Dr. Karan Bhatt{" "}
          <span className="text-sm text-gray-500">(Demo Name)</span>
        </li>
        <li>
          Dr. Anjali Mishra{" "}
          <span className="text-sm text-gray-500">(Demo Name)</span>
        </li>
        <li>
          Dr. Rajeev Chauhan{" "}
          <span className="text-sm text-gray-500">(Demo Name)</span>
        </li>
        <li>
          Dr. Seema Tiwari{" "}
          <span className="text-sm text-gray-500">(Demo Name)</span>
        </li>
        <li>
          Dr. Rohit Saxena{" "}
          <span className="text-sm text-gray-500">(Demo Name)</span>
        </li>
      </ul>

      <p className="mt-10 text-sm text-gray-500 text-center">
        * All names shown here are placeholders for demonstration purposes.
      </p>
    </div>
  );
};

export default Faculty;
