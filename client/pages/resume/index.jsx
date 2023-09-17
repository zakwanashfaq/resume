//import './App.css';
import React from 'react';
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
  return (
    <>
      <Head>
        <title>Zakwan Ashfaq | Portfolio</title>
      </Head>
      <div className='conatiner-fluid p-0 m-0'>
        <div className='flex-container p-0 m-0'>
          {/* <div className='sidebar p-0 m-0'>
            <Sidebar />
          </div> */}
          <div className='content p-0 m-0'>
            <div className="overflow-scroll h-100">
              <ResumeTopNavbar />
              <div className="container-lg px-5">
                <Skills />
                <Experience />
                <Education />
                <FeaturedProjects />
                <Testemonials />
                <ContactMe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
