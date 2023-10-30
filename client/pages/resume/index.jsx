//import './App.css';
import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Sidebar from '../../src/components/sidebar';
import { Skills } from '../../src/components/skills';
import { Experience } from '../../src/components/experience';
import { Education } from '../../src/components/education';
import { FeaturedProjects } from '../../src/components/featuredProjects';
import { Testemonials } from '../../src/components/testemonials';
import { ContactMe } from '../../src/components/contactMe';
import { ResumeTopNavbar } from '../../src/components/resumeTopNav';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      console.log(localStorage.getItem("theme"));
      if (localStorage.getItem("theme") === 'false') {
          setDarkMode(false);
      }
      else {
          setDarkMode(true);
      }
  }
  }, [])

  return (
    <>
      <Head>
        <title>Full Resume</title>
      </Head>
      <div className={'conatiner-fluid p-0 m-0 '  + (darkMode? 'bg-dark text-light' : '')}>
        <div className='flex-container p-0 m-0'>
          {/* <div className='sidebar p-0 m-0'>
            <Sidebar />
          </div> */}
          <div className='content p-0 m-0'>
            <div className="overflow-scroll h-100">
              {/* <ResumeTopNavbar isDark={darkMode}/> */}
              <div className={"main-header px-4 mb-5 " + (darkMode ? "main-header-dark" : "main-header-light")}>
                <h1 className="pb-0 text-sm-center">RESUME</h1>
                <span className="px-md-5 text-sm-center">A more detailed version of my resume</span>
              </div>
              <div className="container-lg px-5 ">
                <Skills />
                <Experience />
                <Education />
                <FeaturedProjects darkMode={darkMode}/>
                {/* <Testemonials /> */}
                {/* <ContactMe /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
