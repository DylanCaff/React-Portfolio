import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-emerald-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a passionate and dedicated individual with a love for technology and problem-solving. With a background in software development, I thrive on creating innovative solutions that make a positive impact. I enjoy working collaboratively in teams, leveraging my strong communication skills to foster effective collaboration. 
        </p>

        <br />

        <p className="text-xl">
        I have a keen eye for detail and strive for excellence in everything I do. Constantly eager to learn and grow, I embrace challenges as opportunities for personal and professional development. I am driven by a desire to contribute to meaningful projects and make a difference in the world through my work.
        </p>
      </div>
    </div>
  );
};

export default About;