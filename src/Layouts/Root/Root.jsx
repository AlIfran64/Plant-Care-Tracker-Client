import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';


const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
};

export default Root;