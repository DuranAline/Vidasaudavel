import { ReactNode } from 'react';
import Header from '../header';
import Footer from '../footer';
import React from 'react';


interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
