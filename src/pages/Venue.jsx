import React from "react";

const Venue = () => {
  return (
    <div className="bg-white py-12 px-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Venue & Accommodation
      </h1>

      {/* Venue Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Conference Venue
        </h2>
        <p className="text-lg leading-relaxed">
          The UPUK MICROCON 2026 conference will be held at the campus of{" "}
          <strong>
            Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)
          </strong>
          , Raebareli Road, Lucknow – 226014, Uttar Pradesh, India.
        </p>

        <p className="text-lg mt-4">
          SGPGIMS is a premier medical institution equipped with
          state-of-the-art facilities and a modern auditorium, offering an ideal
          environment for academic events.
        </p>
      </section>

      {/* Accommodation Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Accommodation
        </h2>
        <p className="text-lg leading-relaxed">
          Accommodation arrangements will be made for registered participants in
          nearby hotels and guest houses. A list of recommended places with
          special conference rates will be shared soon on this page.
        </p>

        <p className="text-lg mt-4">
          Limited guest rooms may also be available within SGPGIMS campus for
          faculty and invited delegates. Assistance for travel and lodging will
          be provided by the organizing committee.
        </p>

        <p className="text-sm text-gray-500 pt-4">
          * This is a demo version. Accommodation details and contacts will be
          updated as confirmed.
        </p>
      </section>
    </div>
  );
};

export default Venue;
