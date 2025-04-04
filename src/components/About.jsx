import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function About() {
  const Navigate = useNavigate();
  document.title = "About Us";

  return (
    <section className="bg-[#1F1E24] py-12 px-6 text-center w-screen h-screen">
      <div className="max-w-4xl mx-auto flex flex-col gap-7">
        <h2 className="text-3xl font-bold text-zinc-50 mb-4 flex ">
          <i
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-5"
          ></i>
          About Us
        </h2>
        <p className="text-lg text-zinc-400 mb-6">
          Welcome to <span className="font-semibold text-white">Web Media</span>
          , your go-to destination for the latest trends, insightful articles,
          and engaging content. We are committed to delivering high-quality
          digital media that informs, inspires, and entertains our audience
          worldwide.
        </p>
        <p className="text-lg text-zinc-400 mb-6">
          Our team of dedicated writers, designers, and developers work
          tirelessly to keep you updated with the most relevant and compelling
          stories. Stay connected and explore the world of media with us.
        </p>
        <p className="text-lg text-zinc-400 mb-6">
          We cover a wide range of topics, from technology and business to
          entertainment and lifestyle, ensuring there’s something for everyone.
          Our goal is to provide a platform where creativity and information
          merge seamlessly.
        </p>
        <p className="text-lg text-zinc-400 mb-6">
          At Web Media, we believe in the power of storytelling and the impact
          of digital content. Our mission is to bring you thought-provoking
          insights and the latest industry trends in an engaging and accessible
          format.
        </p>
        <p className="text-lg text-zinc-400">
          Join us on this journey as we continue to innovate and redefine the
          way you consume online media. Follow us on social media and subscribe
          to our newsletter for the latest updates!
        </p>
      </div>
    </section>
  );
}

export default About;
