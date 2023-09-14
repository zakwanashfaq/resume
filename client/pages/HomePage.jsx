//import './App.css';
import React from 'react';
import { Jumbotron } from '../src/components/jumbotron';
import Head from 'next/head'
import Sidebar from '../src/components/sidebar';

function App() {
  return (
    <>
      <Head>
        <title>Zakwan Ashfaq | Portfolio</title>
      </Head>
      <div className='conatiner-fluid p-0 m-0'>
        <div className='flex-container p-0 m-0'>
          <div className='sidebar p-0 m-0'>
            <Sidebar />
          </div>
          <div className='content p-0 m-0'>
            <div className="overflow-scroll h-100">
              <div className='bg-red py-5'>dc</div>
              <div className='bg-blue py-5'>dc</div>
              <div className='bg-green py-5'>dc</div>
              <div className='bg-yellow py-5'>dc</div>
              <div className='bg-red py-5'>dc</div>
              <div className='bg-blue py-5'>dc</div>
              <div className='bg-green py-5'>dc</div>
              <div className='bg-yellow py-5'>dc</div>
              <div className='bg-red py-5'>dc</div>
              <div className='bg-blue py-5'>dc</div>
              <div className='bg-green py-5'>dc</div>
              <div className='bg-yellow py-5'>dc</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
