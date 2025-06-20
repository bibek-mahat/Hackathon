import React from "react";

const CitizenEngagementBanner = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="h-[80vh] flex justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/your-image-path.jpg')", // Replace with your actual path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-red-500 bg-opacity-70 flex items-center justify-center">
          {/* Content */}
          <div className="text-center px-4 md:px-10 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              New Digital Initiatives for Citizen Engagement
            </h1>
            <p className="mb-6 max-w-xl mx-auto text-sm md:text-base">
              Discover how our new online platforms are making government
              services more accessible and transparent than ever before.
              Participate in policy discussions and provide feedback directly.
            </p>
            <button className="btn btn-outline btn-white">
              Explore Initiatives →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenEngagementBanner;
