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
        <div className='row p-0 m-0'>
          <div className='col-12 col-md-4 col-lg-4 col-xl-3 p-0 m-0'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-8 col-lg-8 col-xl-9 p-0 m-0'>
            <Jumbotron />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
