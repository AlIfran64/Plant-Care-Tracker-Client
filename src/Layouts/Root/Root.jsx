import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';



const Root = () => {


  const { state } = useNavigation();


  return (
    <div>

      <header>
        <section className="lg:fixed top-8 w-full z-50">
          <Navbar />
        </section>

      </header>

      <main>
        {
          state == "loading" ?
            <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
              <span className="loading loading-spinner loading-lg"></span>
            </div>
            :
            <Outlet></Outlet>
        }

      </main>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
};

export default Root;