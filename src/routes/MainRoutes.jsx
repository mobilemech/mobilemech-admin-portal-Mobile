import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const ChurchSettings = Loadable(lazy(() => import('pages/component-overview/ChurchSettings')));
const TeamMember = Loadable(lazy(() => import('pages/component-overview/TeamMember')));
const Verification = Loadable(lazy(() => import('pages/component-overview/Verification')));
const AllStreams = Loadable(lazy(() => import('pages/component-overview/AllStreams')));
const Events = Loadable(lazy(() => import('pages/component-overview/Events')));
const Donations = Loadable(lazy(() => import('pages/component-overview/Donations')));
const Merchandise = Loadable(lazy(() => import('pages/component-overview/Merchandise')));

const BibleStudy = Loadable(lazy(() => import('pages/component-overview/BibleStudy')));
const Community = Loadable(lazy(() => import('pages/component-overview/Community')));
const Requests = Loadable(lazy(() => import('pages/component-overview/Requests')));


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
      path: 'TeamMember',
      element: <TeamMember />
    },
    {
      path: 'ChurchSettings',
      element: <ChurchSettings />
    },
    {
      path: 'Verification',
      element: <Verification />
    },



     {
      path: 'Merchandise',
      element: <Merchandise />
    },
 

    {
      path: 'AllStreams',
      element: <AllStreams />
    },

    
    {
      path: 'Events',
      element: <Events />
    },



    
    
    {
      path: 'Donations',
      element: <Donations />
    },



     {
      path: 'BibleStudy',
      element: <BibleStudy />
    },


     {
      path: 'Community',
      element: <Community />
    },



      {
      path: 'Requests',
      element: <Requests />
    },











  ]
};

export default MainRoutes;
