import SearchHeader from '@/components/SearchHeader';
import React from 'react';
import '../../../src/app/globals.css';

function Layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}

export default Layout;
