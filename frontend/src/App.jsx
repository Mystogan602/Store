import React from 'react'
import Navigation from './pages/Auth/Navigation'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className='py-3'>
        <Outlet />
      </main>
    </>
  );
};

export default App
