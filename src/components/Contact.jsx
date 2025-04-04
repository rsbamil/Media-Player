import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const Navigate = useNavigate();
  document.title = "Contact Us";
  return (
    <section className="bg-[#1F1E24] w-screen h-screen">
      <div className="max-w-3xl mx-auto p-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          <i
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-5"
          ></i>
          Contact Us
        </h2>
        <p className="text-lg text-zinc-400 mb-6">
          Have questions or feedback? We'd love to hear from you! Reach out to
          us through the form below or connect with us via email or social
          media.
        </p>
        <form className="bg-[#1F1E24] p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-white text-left mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded bg-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded bg-white"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-left mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded bg-white"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
        <p className="text-gray-600 mt-6">
          Or email us at{" "}
          <a href="mailto:contact@webmedia.com" className="text-blue-600">
            contact@webmedia.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
