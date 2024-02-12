import React, { Component } from 'react';
import './App.css';
import Layout from './layout/Layout'
import Guarantee from './components/pages/Guarantee';
import Delivery from './components/pages/Delivery';
import Wholesale from './components/pages/Wholesale';
import Contacts from './components/pages/Contacts';
import Gift from './components/pages/Gift';
import Sweet from './components/pages/Sweet';
import Catalogue from './components/pages/Catalogue';
import ForCompanies from './components/pages/ForCompanies';
import NotFound from './components/pages/NotFound';
import Homepage from './components/pages/homepage/Homepage';
import Newspage from './components/pages/newspage/Newspage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReadySets from './components/pages/ReadySetsPage/ReadySets';
import Wedding from './components/pages/Wedding';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
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
        path: '/Newspage',
        element: <Newspage />
      },
      {
        path: '/ReadySets',
        element: <ReadySets />
      },
      {
        path: '/Wedding',
        element: <Wedding />
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
            <RouterProvider router={router}/>
      </div>
    );
  }
}

export default App;
