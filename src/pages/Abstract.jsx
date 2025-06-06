import React, { useState } from "react";

const Abstract = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    category: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your abstract has been submitted successfully!");
    setFormData({ name: "", email: "", title: "", category: "", notes: "" });
  };

  return (
    <div className="bg-white py-12 px-4 max-w-xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Abstract Submission
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Abstract Title */}
        <div>
          <label className="block mb-1 font-medium">Title of Abstract</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select...</option>
            <option value="Oral">Oral Presentation</option>
            <option value="Poster">Poster Presentation</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-1 font-medium">
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Any special message or instruction..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Submit Abstract
          </button>
        </div>
      </form>
    </div>
  );
};

export default Abstract;
