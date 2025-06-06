import React from "react";

const Workshop = () => {
  return (
    <div className="bg-white py-12 px-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Pre-Conference Workshops
      </h1>

      <section className="space-y-6 text-lg">
        <p>
          UPUK MICROCON 2026 will host hands-on pre-conference workshops to
          enhance practical skills and provide in-depth training in key areas of
          medical microbiology. These workshops will be conducted on{" "}
          <strong>5th February 2026</strong>, a day before the main conference.
        </p>

        <p>
          Workshops will be conducted by experienced faculty and will cover
          topics such as:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Molecular Diagnostics in Infectious Diseases</li>
          <li>Antimicrobial Resistance Testing Techniques</li>
          <li>Rapid Diagnostic Methods</li>
          <li>Quality Control in Clinical Microbiology Labs</li>
        </ul>

        <p>
          Participation is limited and will be based on prior registration.
          Certificates of participation will be provided to attendees.
        </p>

        <p className="text-sm text-gray-500 pt-4">
          * This is a demo page. Final topics, speakers, and registration
          details will be updated soon.
        </p>
      </section>
    </div>
  );
};

export default Workshop;
