import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Header/Banner/Banner';
import Navbar from '../../Components/Header/Navbar/Navbar';



const Root = () => {
  return (
    <div>

      <header>
        <section className="lg:fixed top-8 w-full z-50">
          <Navbar />
        </section>

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