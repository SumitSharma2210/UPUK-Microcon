import React from "react";

const Program = () => {
  return (
    <div className="bg-white py-12 px-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        UPUK MICROCON 2026 – Overview
      </h1>

      {/* About the Conference */}
      <section className="mb-8">
        <p className="mb-6 text-lg leading-relaxed">
          <strong>UPUK MICROCON</strong> is the annual conference of the{" "}
          <strong>
            UP-UK Chapter of the Indian Association of Medical Microbiologists
            (IAMM)
          </strong>
          . The 21st edition of the conference is being held in{" "}
          <strong>Lucknow</strong> on <strong>6th and 7th February 2026</strong>
          , hosted by the Department of Microbiology at{" "}
          <strong>
            Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)
          </strong>
          .
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          The conference aims to bring together experts, researchers, and
          students in the field of medical microbiology for academic exchange
          and collaboration. The program includes keynote sessions, research
          paper presentations, and discussions on new diagnostics, antimicrobial
          resistance, and infection control strategies.
        </p>

        <p className="text-lg leading-relaxed">
          Participants will also have the opportunity to explore the rich
          culture of Lucknow alongside academic enrichment. We look forward to
          your active participation!
        </p>
      </section>

      {/* Optionally Add a Program Schedule Heading */}
      {/* <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Tentative Schedule</h2>
        <p className="text-gray-600">To be updated soon.</p>
      </section> */}
    </div>
  );
};

export default Program;
