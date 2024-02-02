import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Guarantee from './components/pages/Guarantee';
import Delivery from './components/pages/Delivery';
import Wholesale from './components/pages/Wholesale';
import Contacts from './components/pages/Contacts';
import Gift from './components/pages/Gift';
import Sweet from './components/pages/Sweet';
import Catalogue from './components/pages/Catalogue';
import ForCompanies from './components/pages/ForCompanies';
import NotFound from './components/pages/NotFound';
import Main from './components/main/Main';

import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/Guarantee',
        element: <Guarantee />
      },
      {
        path: '/Delivery',
        element: <Delivery />
      },
      {
        path: '/Contacts',
        element: <Contacts />
      },
      {
        path: '/Wholesale',
        element: <Wholesale />
      },
      {
        path: '/Gift',
        element: <Gift />
      },
      {
        path: '/Sweet',
        element: <Sweet />
      },
      {
        path: '/Catalogue',
        element: <Catalogue />
      },
      {
        path: '/ForCompanies',
        element: <ForCompanies />
      },
      {
        path: '*', 
        element: <NotFound />
      },
    ]
  }
]);

class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-gray-100 flex flex-col justify-between min-h-screen">
        <RouterProvider router={router}>
          <Main>
            <Outlet />
          </Main>
        </RouterProvider>
        <Footer />
      </div>
    );
  }
}

export default App;
