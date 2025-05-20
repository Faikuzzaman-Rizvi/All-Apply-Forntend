import React, { useState } from "react";

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add logic to fetch tracking info from your backend or API
    setResult({
      status: "In Transit",
      lastLocation: "Distribution Center, Cityville",
      estimatedDelivery: "2024-06-15",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Track Your Package</h1>
        <p className="text-gray-600 mb-6 text-center">
          Enter your tracking number below to get the latest status of your shipment.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={trackingNumber}
            onChange={handleChange}
            required
            placeholder="Enter tracking number"
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold shadow"
          >
            Track
          </button>
        </form>
        {submitted && (
          <div className="mt-6">
            {result ? (
              <div className="bg-blue-50 border border-blue-200 rounded p-4 text-center">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Status: {result.status}</h2>
                <p className="text-gray-700 mb-1">Last Location: {result.lastLocation}</p>
                <p className="text-gray-700">Estimated Delivery: {result.estimatedDelivery}</p>
              </div>
            ) : (
              <div className="text-gray-500 text-center">No tracking information found for this number.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingPage;
