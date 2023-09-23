import React from 'react';
import Typewriter from 'typewriter-effect'; // Import the Typewriter component

import './App.css';

// img imports
import weaterimg from './Weather-img.png';
import quizzimg from './quizz-img.png';
import nikeimg from './Nike-img.png';
import bikeimg from './Bike-img.png';
import blogginimg from './blooging-img.png';
import cotactusimg from './contactus-img.png';
import dreamimg from './Dream-img.png';
import ecommerceimg from './e-commerce-img.png';
import flicard from './flip-img.png';
import todoimg from './todo-img.png';

// Define your typewriter options here
const typewriterOptions = {
  strings: ["Muhammad Zain-ul-arfeen", "Full-Stack-Developer", "Mern-Stack-Developer", "React-Developer", "Frontend Developer", "Backend Developer", "Graphic Designer", "Student", "Zain Khan 25"],
  autoStart: true,
  loop: true,
  // Other options here...
};


const myskillsarray = [
  {
    name: 'Html',
    number: "90%"
  }, {
    name: 'Css',
    number: "85%"
  }, {
    name: 'Bootstrap',
    number: "95%"
  }, {
    name: 'Java Script',
    number: "70%"
  }, {
    name: 'Firebase',
    number: "90%"
  }, {
    name: 'Node Js',
    number: "70%"
  }, {
    name: 'Express Js',
    number: "90%"
  }, {
    name: 'Mongo DB',
    number: "90%"
  }, {
    name: 'React Js',
    number: "70%"
  }
]

const data = [
  {
    name: 'Weather Application',
    link: 'https://weather-app-react-beta.vercel.app/',
    imgsrc: weaterimg,
    tools: 'React Js'
  }, {
    name: 'Quiz App',
    link: 'https://vercel.com/zainkhan25/quiz-app',
    imgsrc: quizzimg,
    tools: 'React Js'
  }, {
    name: 'Nike Website',
    link: 'https://vercel.com/zainkhan25/nike-website',
    imgsrc: nikeimg,
    tools: 'React Js'
  }, {
    name: 'Bike Show Room App',
    link: 'https://vercel.com/zainkhan25/bike-show-room-app',
    imgsrc: bikeimg,
    tools: 'React Js'
  }, {
    name: 'Blogging Website',
    link: 'https://mini-hackathon-0.web.app/',
    imgsrc: blogginimg,
    tools: 'Html, Css, Bootstrap, Javascript and Firebase'
  }, {
    name: 'Contact Us Page',
    link: 'https://vercel.com/zainkhan25/contact-us-page-using-react',
    imgsrc: cotactusimg,
    tools: 'React Js'
  }, {
    name: 'Soical Media App',
    link: 'https://zainkhan25.github.io/Firebase-Dream-App',
    imgsrc: dreamimg,
    tools: 'Html, Css, Bootstrap, Javascript and Firebase'
  }, {
    name: 'Ecommerce Ui',
    link: 'https://zainkhan25.github.io/ecommerce-website/',
    imgsrc: ecommerceimg,
    tools: 'Html, Css and Bootrap'
  }, {
    name: 'Flip Card',
    link: 'https://vercel.com/zainkhan25/flip-cards',
    imgsrc: flicard,
    tools: 'React Js'
  }, {
    name: 'To Do App',
    link: 'https://vercel.com/zainkhan25/todo-app-with-react-zainkhan25',
    imgsrc: todoimg,
    tools: 'React Js'
  },
]


function App() {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <Aboutme />
      <Myprojects />
      <Myskills />
      <Contactme />
      <Footer />
    </div>
  );
}

// navbar
function Navbar() {
  return (
    <nav className='d-flex flex-wrap navbarzk align-items-center justify-content-around shadow ' id='home'>
      <h3 className='my-auto'>Zain Khan</h3>
      <h5 className='navbarothername my-auto text-center'>
        <a className='text-decoration-none' href="#home"><span className='mx-2'>HOME</span></a>
        <a className='text-decoration-none' href="#about-me"><span className='mx-2'>ABOUT ME</span></a>
        <a className='text-decoration-none' href="#myprojects"><span className='mx-2'>MY PROJECTS</span></a>
        <a className='text-decoration-none' href="#myskills"><span className='mx-2'>MY SKILLS</span></a>
        <a className='text-decoration-none' href="#cotactme"><span className='mx-2'>CONTACT ME</span></a>
      </h5>
    </nav>
  );
}

// Home
function Home() {
  return (
    <div data-aos="fade-in" className='d-flex flex-wrap justify-content-around align-items-center px-2' id='homearea'>
      <div className='d-flex px-1 justify-content-center align-items-start flex-column'>
        <div className='fs-1 mx-auto welcometxt ms-2'>
          Hello Everyone I am
        </div>
        <div className='d-flex ms-2 autotypingtxt'>

          <span className='text-wrap autotypespan'>
            <Typewriter
              options={typewriterOptions} // Pass the options object here
            /></span>
        </div>
      </div>
      <div style={{minWidth: "45%",maxWidth:'100%'}}>
        <img className='animationimg mt-1' src={'https://avatars.githubusercontent.com/u/121414309?v=4'} alt="" />

      </div>
    </div>
  );
}


// About me
function Aboutme() {
  return (
    <div data-aos-offset="250" data-aos-duration="1500" data-aos="fade-right" className='container pt-5' id='about-me'>
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


  return (
    <div data-aos-offset="100" data-aos-duration="1000" data-aos="fade-left" className='container pt-2 myprojectsdiv' id='myprojects'>
      <h1 className='headingwithbluecolor'>My Projects</h1>
      <div className='d-flex justify-content-around flex-wrap mt-3'>
        {data.map((x, i) => <SingleCardofMyProject key={i} arraydata={x} />)}
      </div>
    </div>
  )
}
// signle card of my project
function SingleCardofMyProject({ arraydata }) {
  return (
    <div className="card my-2" style={{ width: '18rem' }}>
      <img src={arraydata.imgsrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{arraydata.name}</h5>
        <p className="card-text">This project is made with "{arraydata.tools}"</p>
        <a target='blank' href={arraydata.link} className="btn btnofmyproject">Want to See Project</a>
      </div>
    </div>
  )
}


// my skills
function Myskills() {



  return (
    <div data-aos-offset="250" data-aos-duration="2000" data-aos="fade-right" className='container pt-5 myprojectsdiv mb-5' id='myskills'>
      <h1 className='headingwithbluecolor mb-5'>My Skills</h1>
      {myskillsarray.map((single, i) => <Singleskillline myskillsarray={single} key={i} />)}
    </div>
  )
}

function Singleskillline({ myskillsarray }) {
  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,5%)' }} className='d-flex container justify-content-between flex-wrap ps-3 my-2 text-start align-items-center rounded backgroundhover'>
      <span>{myskillsarray.name}</span>
      <div className="progress fs-6" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "30px", width: "500px" }}>
        <div className="progress-bar" style={{ width: myskillsarray.number, backgroundColor: 'rgba(91 180 255, 90%)' }}>{myskillsarray.number}</div>
      </div>

    </div>
  )
}

// contact me 
function Contactme() {
  return (
    <div data-aos-offset="250" data-aos-duration="2000" data-aos="fade-left" className='container pt-5 myprojectsdiv w-100 mb-5 ' id='cotactme'>
      <h1 className='headingwithbluecolor mb-5'>Contact Me</h1>
      <div className='mt-2 cotactmediv'>
        <h6 className='d-flex container py-2 px-3 my-2 text-start align-items-center rounded'>
          <i className="fa-solid me-2 fa-envelope fontawesome"></i> <a className='text-decoration-none me-2 headingwithbluecolor' href="mailto:zainarfeen87@gmail.com">Click me</a> to open my gmail account
        </h6>
        <h6 className='d-flex container py-2 px-3 my-2 text-start align-items-center rounded'>
          <i className="fa-solid me-2 fa-phone fontawesome"></i> 0300-9297318
        </h6>
        <h6 className='d-flex container py-2 px-3 my-2 text-start align-items-center rounded'>
          <i className="fa-brands me-2 fa-github fontawesome"></i> <a className='text-decoration-none me-2 headingwithbluecolor' href="https://github.com/ZAINKHAN25">CLick Me</a> to open my github proifle
        </h6>
        <h6 className='d-flex container py-2 px-3 my-2 text-start align-items-center rounded'>
          <i className="fa-brands me-2 fa-linkedin fontawesome"></i> <a className='text-decoration-none me-2 headingwithbluecolor' href="https://www.linkedin.com/in/zain-khan-21992026a/">Click Me</a> to open my linkedin proifle
        </h6>
        <h6 className='d-flex container py-2 px-3 my-2 text-start align-items-center rounded'>
          <i className="fa-solid me-2 fa-house fontawesome"></i> Metroville, S.I.T.E, Karachi, Block 1, B-217.</h6>
      </div>
    </div>
  )
}

function Footer(){
  return (
    <div className='d-flex container footerarea mt-5 align-items-center flex-column justify-content-evenly'>
      <div className='fs-1 headingwithbluecolor'>Zain Khan</div>
      <div className='headingwithbluecolor'>
        @ 2023 ui-themes. All Rights Reversed.
      </div>
    </div>
  )
}


export default App;
