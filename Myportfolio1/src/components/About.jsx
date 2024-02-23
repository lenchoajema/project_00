import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a highly motivated computer scientist and engineer with a strong academic background and diverse work experience. I am passionate about pushing the boundaries of technology and using my skills to solve real-world problems.
        </p>

        <br />

        <p className="text-xl">
        Software development: I have experience developing applications using various languages like Java, Python, C++, and JavaScript. I am proficient in various development tools and frameworks like Git, Android Studio, and TensorFlow.
Machine learning: I have a strong understanding of machine learning concepts and have applied them in research projects like "Target Identification and Event Analysis of UAV Based on Deep Learning."
Full-stack development: I possess skills in both front-end (HTML, CSS) and back-end development, allowing me to build complete web applications.
Database management: I am comfortable working with relational and non-relational databases like MySQL and MongoDB.
Teaching: I have experience teaching computer science courses at the university level and enjoy sharing my knowledge with others.
        </p>
      </div>
    </div>
  );
};

export default About;