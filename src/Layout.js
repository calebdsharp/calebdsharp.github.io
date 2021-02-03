import React from 'react';
import NavMenu from './src/Components/NavMenu';
import Footer from './src/Components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />
      {children}
      <Footer />
    </>
  );
}
