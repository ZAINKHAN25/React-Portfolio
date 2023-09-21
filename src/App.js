import React from 'react';
import Typewriter from 'typewriter-effect'; // Import the Typewriter component

import './App.css';

// Define your typewriter options here
const typewriterOptions = {
  strings: ["Muhammad Zain-ul-arfeen", "Full-Stack-Developer", "Mern-Stack-Developer", "React-Developer", "Frontend Developer", "Backend Developer", "Graphic Designer", "Student", "Zain Khan 25"],
  autoStart: true,
  loop: true,
  // Other options here...
};

function App() {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <Aboutme />
      <Myprojects />
    </div>
  );
}

// navbar
function Navbar() {
  return (
    <nav className='d-flex flex-wrap navbarzk align-items-center justify-content-around p-3 shadow ' id='home'>
      <h3 className='my-auto'>Zain Khan</h3>
      <h5 className='navbarothername my-auto'>
        <a className='text-decoration-none' href="#home"><span className='mx-2'>HOME</span></a>
        <a className='text-decoration-none' href="#about-me"><span className='mx-2'>ABOUT ME</span></a>
        <a className='text-decoration-none' href="#"><span className='mx-2'>MY PROJECTS</span></a>
        <a className='text-decoration-none' href="#"><span className='mx-2'>MY SKILLS</span></a>
        <a className='text-decoration-none' href="#"><span className='mx-2'>CONTACT ME</span></a>
      </h5>
    </nav>
  );
}

// Home
function Home() {
  return (
    <div data-aos="fade-in"  className='d-flex'>
      <div className='d-flex px-1 justify-content-center align-items-start flex-column' id='homearea'>
        <div className='fs-1 welcometxt ms-1'>
          Hello Everyone I am
        </div>
        <div className='d-flex ms-1 autotypingtxt'>

          <span className='text-wrap autotypespan'>
            <Typewriter
              options={typewriterOptions} // Pass the options object here
            /></span>
        </div>
      </div>
      <div>
      <img className='animationimg' style={{ width: "50vw" }} src={'https://avatars.githubusercontent.com/u/121414309?v=4'} alt="" />

      </div>
    </div>
  );
}


// About me
function Aboutme() {
  return (
    <div data-aos-offset="250" data-aos-duration="1500" data-aos="fade-right" className='container mt-5' id='about-me'>
      <h1 className='headingwithbluecolor'>About Me</h1>

      <p className='mt-4'>
        <div>
          Hello to everyone. My name is M.Zain-ul-arfeen. I am 15 year's old. I am currently learning web development course from saylani mass it training and As a student currently enrolled in the Mern stack development course at Saylani Mass IT Training, I have a unique opportunity to showcase my growing expertise and knowledge in web development through my portfolio. With a deep understanding of HTML, CSS, and Bootstrap,JavaScript,Firebase,Node JS, Mongo Db, Express Js,React Js. I am well-equipped to create visually stunning and responsive websites that are optimized for a variety of devices.
          In addition to my proficiency in front-end web development, I also possess a basic knowledge of JavaScript, which is a crucial component of the Mern stack. With this foundational understanding, I am poised to delve deeper into the complexities of back-end development using Node.js and Express.
        </div>

        <div className='mt-2'>
          As I continue to progress through the Mern stack development course, my portfolio will serve as a living record of my growth and development. By including projects that demonstrate my ability to integrate various technologies and solve complex problems, I can showcase my unique strengths and abilities to potential employers.
          Overall, my portfolio is an essential tool for showcasing my skills and expertise in web development, and as I continue to learn and grow, it will serve as a powerful testament to my commitment to the craft. With a deep understanding of HTML, CSS, Bootstrap, and a growing knowledge of JavaScript, I am well on my way to becoming a skilled and successful Mern stack developer.
        </div>
      </p>
    </div>
  )
}


// My Projects
function Myprojects() {
  // const data = [
  //   {
  //     name: 'firebase',
  //     link: 'jdfsjds.wev.app',
  //     imgsrc: 'kfdskdskds'
  //   }
  // ]

  return (
    <div>
      Hello it will be my project area soon
    </div>
  )
}


export default App;
