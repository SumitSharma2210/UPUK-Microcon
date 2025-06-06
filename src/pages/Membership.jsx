import React from "react";

const Membership = () => {
  return (
    <div className="bg-white py-12 px-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        IAMM Membership
      </h1>

      <section className="space-y-6 text-lg">
        <p>
          <strong>Indian Association of Medical Microbiologists (IAMM)</strong>{" "}
          welcomes new members who are actively engaged in the fields of
          microbiology, infectious diseases, or related medical sciences.
        </p>

        <p>
          Becoming a member of IAMM provides you access to:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Networking opportunities with senior microbiologists and
              researchers
            </li>
            <li>Participation in annual conferences and academic workshops</li>
            <li>Eligibility for paper presentations and awards</li>
            <li>Access to IAMM publications and newsletters</li>
          </ul>
        </p>

        <p>
          <strong>Membership is open to:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Medical microbiologists</li>
            <li>Postgraduate students in microbiology</li>
            <li>Research scientists in related disciplines</li>
          </ul>
        </p>

        <p>
          For detailed information about membership categories and application
          procedures, please visit the official IAMM website at:{" "}
          <a
            href="https://www.myiamm.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            www.myiamm.in
          </a>
        </p>

        <p className="text-sm text-gray-500 pt-4">
          * This content is for demonstration purposes only and may not reflect
          actual IAMM policies.
        </p>
      </section>
    </div>
  );
};

export default Membership;
