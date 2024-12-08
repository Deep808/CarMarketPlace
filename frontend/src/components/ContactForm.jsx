import React from "react";

const ContactForm = () => {
  return (
    <form className="mx-auto bg-white rounded my-6">
      {/* Form Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="firstName"
          >
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Your First Name"
            className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          />
        </div>

        {/* Last Name Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="lastName"
          >
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Your Last Name"
            className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="mt-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write Your Message Here..."
          className="border border-[#6A1E55]/20 outline-none p-4 mt-1 block w-full rounded shadow-sm focus:border-[#6A1E55] focus:ring-[#6A1E55]"
          rows="5"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="mt-6 lg:w-1/4 mx-auto">
        <button
          type="submit"
          className="w-full p-4 bg-[#3B1C32] text-white font-medium shadow-sm cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
