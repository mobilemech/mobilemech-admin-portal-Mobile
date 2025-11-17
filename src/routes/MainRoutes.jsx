import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Settings = Loadable(lazy(() => import('pages/component-overview/Settings')));
const Analytics = Loadable(lazy(() => import('pages/component-overview/Analytics')));
const Activities = Loadable(lazy(() => import('pages/component-overview/Activities')));
const Mechanic = Loadable(lazy(() => import('pages/component-overview/Mechanic')));
const CarOwner = Loadable(lazy(() => import('pages/component-overview/CarOwner')));
const Services = Loadable(lazy(() => import('pages/component-overview/Services')));
const Logout = Loadable(lazy(() => import('pages/component-overview/Logout')));

const Admins = Loadable(lazy(() => import('pages/component-overview/Admins')));
const Finance = Loadable(lazy(() => import('pages/component-overview/Finance')));
const Messages = Loadable(lazy(() => import('pages/component-overview/Messages')));


// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/dashboard',
  element: <DashboardLayout />,




  children: [
    {
      path: '/dashboard/home',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/home',
      children: [
        {
          path: '/dashboard/home',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'Analytics',
      element: <Analytics />
    },
    {
      path: 'Settings',
      element: <Settings />
    },
    {
      path: 'Activities',
      element: <Activities />
    },



     {
      path: 'Logout',
      element: <Logout />
    },
 

    {
      path: 'Mechanic',
      element: <Mechanic />
    },

    
    {
      path: 'CarOwner',
      element: <CarOwner />
    },



    
    
    {
      path: 'Services',
      element: <Services />
    },



     {
      path: 'Admins',
      element: <Admins />
    },


     {
      path: 'Finance',
      element: <Finance />
    },



      {
      path: 'Messages',
      element: <Messages />
    },











  ]
};

export default MainRoutes;
